import { Component, HostBinding } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, tap, withLatestFrom } from 'rxjs/operators';
import { CareerEvent } from '../model/career-event';
import { DataService } from '../services/data.service';
import { TagSearchService } from '../services/tag-search.service';

/**
 * The event list.
 */
@Component({
  selector: 'cv-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

  /**
   * The project & job timeline.
   */
  public events$: Observable<CareerEvent[]>;

  /**
   * Education Events
   */
  public education$: Observable<CareerEvent[]>;

  /**
   * Presentation Events
   */
  public presentations$: Observable<CareerEvent[]>;

  @HostBinding('class')
  public state: string;

  /**
   * Constructor.
   */
  public about$: Observable<string>;

  constructor(public dataService: DataService,
              public tagService: TagSearchService) {

    const profileText$ = dataService.profile$
      .pipe(
        map((profile) => profile.about),
        map((about) => about[0].text)
      );

    this.about$ = combineLatest([profileText$, tagService.selectedTags$])
      .pipe(
        map(([about, tags]) => tags.length > 0 ? about : '')
      );

    tagService.selectedTags$
      .pipe(
        map((value) => value.length > 0)
      ).subscribe((hasTags) => this.state = hasTags ? 'expand' : 'collapse');

    const all$ = combineLatest([dataService.events$, tagService.selectedTags$])
      .pipe(
        map(([events, tags]) => {
          if (tags.length === 0) {
            return [];
          }
          if (tags.indexOf('Everything') > -1) {
            return events;
          }

          return events.filter((event) => {
            return tags.filter((tag) => event.tags.indexOf(tag) > -1).length > 0;
          });
        }),
        shareReplay(1)
      );

    this.events$ = all$
      .pipe(
        map((events) => events.filter((event) => ['presentation', 'education'].indexOf(event.type) === -1))
      );

    this.education$ = all$
      .pipe(
        map((events: CareerEvent[]) => events.filter((event) => event.type === 'education'))
      );

    this.presentations$ = all$
      .pipe(
        map((events: CareerEvent[]) => events.filter((event) => event.type === 'presentation'))
      );

  }

}
