import { Component } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { concatMap, map, reduce, shareReplay } from 'rxjs/operators';
import { CareerEvent } from '../model/career-event';
import { DataService } from '../services/data.service';
import { TagSearchService } from '../services/tag-search.service';

interface SkillCollection {
  [key: string]: { startDate: Date, endDate: Date, duration?: number, lastUsed?: number };
}

interface SkillEntry {
  name: string;

  endDate: Date;

  startDate: Date;

  duration?: number;

  lastUsed?: number;
}

const yearInMillis = 365 * 24 * 60 * 60 * 1000;
const monthInMillis = yearInMillis / 12;

@Component({
  selector: 'cv-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss']
})
export class SkillBoxComponent {

  // A sorted list of skills.
  public skills$: Observable<SkillEntry[]>;

  public filteredSkills$: Observable<SkillEntry[]>;

  public startDate$: Observable<number>;

  public endDate$: Observable<number>;

  public dateRange$: Observable<number>;

  constructor(dataService: DataService, tags: TagSearchService) {
    this.skills$ = dataService.events$
      .pipe(
        concatMap((events) => of(...events)),
        concatMap((event: CareerEvent) => of(...event.tags.map((name) => ({
          name,
          startDate: typeof event.date === 'string' ? event.date : event.date.begin,
          endDate: typeof event.date === 'string' ? event.date : event.date.end
        })))),
        map((skill): SkillEntry => {
          const startDate = new Date(skill.startDate);
          const endDate = skill.endDate === 'current' ? new Date() : new Date(skill.endDate);
          return { name: skill.name, startDate, endDate };
        }),
        reduce((acc: SkillCollection, val: SkillEntry) => {
          if (!acc.hasOwnProperty(val.name)) {
            acc[val.name] = { startDate: val.startDate, endDate: val.endDate };
          } else {
            const current = acc[val.name];
            current.startDate = current.startDate > val.startDate ? val.startDate : current.startDate;
            current.endDate = current.endDate < val.endDate ? val.endDate : current.endDate;
          }

          acc[val.name].duration = acc[val.name].endDate.getTime() - acc[val.name].startDate.getTime();
          acc[val.name].lastUsed = new Date().getTime() - acc[val.name].endDate.getTime();

          return acc;
        }, <SkillCollection>{}),
        map((coll) => {
          const skills = Object.keys(coll).map((key): SkillEntry => ({
            name: key,
            startDate: coll[key].startDate,
            endDate: coll[key].endDate,
            duration: coll[key].duration,
            lastUsed: coll[key].lastUsed
          }));

          return skills.sort((a, b) => {
            if (a.endDate > b.endDate) {
              return -1;
            }
            if (a.endDate < b.endDate) {
              return 0;
            }
            return a.duration === b.duration ? 0 : a.duration < b.duration ? 1 : -1;
          });
        }),
        shareReplay(1)
      );

    this.filteredSkills$ = combineLatest(this.skills$, tags.selectedTags$, dataService.profile$)
      .pipe(
        map(([skills, selectedTags, profile]) => {
          let filteringSkills = profile.featuredSkills;
          if (selectedTags.indexOf('Everything') === -1) {
            filteringSkills = selectedTags;
          }

          if (filteringSkills.length === 0) {
            return [];
          }

          return skills.filter((skill) => filteringSkills.indexOf(skill.name) > -1);
        }),
        shareReplay(1)
      );

    this.startDate$ = this.filteredSkills$
      .pipe(
        map((skills) => skills
          .map((skill) => skill.startDate)
          .sort((a, b) => a > b ? 1 : a < b ? -1 : 0)[0]
        ),
        map((date) => date ? date.getTime() : 0),
        shareReplay(1)
      );

    this.endDate$ = this.skills$
      .pipe(
        map((skills) => skills
          .map((skill) => skill.endDate)
          .sort((a, b) => a > b ? -1 : a < b ? 1 : 0)[0]
        ),
        map((date) => date ? date.getTime() : 0),
        shareReplay(1)
      );

    this.dateRange$ = combineLatest(this.startDate$, this.endDate$)
      .pipe(
        map(([start, end]) => end - start)
      );
  }

  /**
   * A millisecond duration, expressed as a string in months/years.
   */
  public durationLabel(skill: SkillEntry): string {
    const year = Math.floor(skill.duration / yearInMillis);
    const month = Math.floor((skill.duration % yearInMillis) / monthInMillis);
    const yearLabel = year === 0 ? '' : year === 1 ? '1 year' : `${year} years`;
    const monthLabel = month === 0 ? '' : month === 1 ? '1 month' : `${month} months`;

    const parts = [];
    if (yearLabel) {
      parts.push(yearLabel);
    }
    if (monthLabel) {
      parts.push(monthLabel);
    }
    return parts.join(', ');
  }
}
