import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../model/profile';
import { ProfileContact } from '../model/profile-contact';
import { DataService } from '../services/data.service';
import { TagSearchService } from '../services/tag-search.service';

/**
 * Shared header.
 */
@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /**
   * The profile service.
   */
  public profile$: Observable<Profile>;

  /**
   * The contacts
   */
  public contacts$: Observable<ProfileContact[]>;

  /**
   * Did we select any tags?
   */
  public hasNoTags$: Observable<boolean>;

  /**
   * Class list.
   */
  @HostBinding('class')
  public state: string;

  /**
   * Constructor.
   */
  constructor(private data: DataService,
              private tags: TagSearchService) {
    tags.selectedTags$
      .pipe(
        map((t) => t.length > 0 ? 'collapse' : 'expand')
      ).subscribe((value) => this.state = value);

    this.hasNoTags$ = tags.selectedTags$.pipe(
      map(value => !value.length)
    );

    this.profile$ = data.profile$;
    this.contacts$ = data.profile$
      .pipe(
        map((profile) => profile && profile.contact || [])
      );
  }

  /**
   * Choose all items in the CV.
   */
  public everything(): void {
    this.tags.clear();
    this.tags.addTag('Everything');
  }
}
