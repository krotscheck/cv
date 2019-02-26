import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, shareReplay } from 'rxjs/operators';
import { CareerEvent } from '../model/career-event';
import { Profile } from '../model/profile';

/**
 * The data service.
 */
@Injectable({ providedIn: 'root' })
export class DataService {

  public profile$: Observable<Profile>;

  public events$: Observable<CareerEvent[]>;

  constructor(http: HttpClient) {

    const profileUrl = `data/profile.json`;
    const eventsUrl = `data/events.json`;

    this.profile$ = http.get<Profile>(profileUrl).pipe(first(), shareReplay(1));
    this.events$ = http.get<{ results: CareerEvent[] }>(eventsUrl).pipe(
      map((result) => result.results.sort((a, b) => {
        const aDate = this.buildDate(a.date, 'begin').getTime();
        const bDate = this.buildDate(b.date, 'begin').getTime();
        if (aDate === bDate) {
          return 0;
        }
        return aDate > bDate ? -1 : 1;
      })),
      first(),
      shareReplay(1)
    );
  }

  private buildDate(date: string | { begin: string, end: string }, key: 'begin' | 'end'): Date {
    let dateString: string;
    if (typeof date === 'string') {
      dateString = date;
    } else {
      dateString = date[key];
    }
    if (dateString === 'current') {
      return new Date();
    }
    return new Date(dateString);
  }
}
