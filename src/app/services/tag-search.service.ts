import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as elasticlunr from 'elasticlunr';
import { Observable, of, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  pluck,
  reduce,
  shareReplay,
  startWith,
  switchMap,
  take,
  withLatestFrom
} from 'rxjs/operators';
import { ElasticLunrIndex } from '../elasticlunr/elasticlunr.index';
import { ElasticLunrResult } from '../elasticlunr/elasticlunr.result';
import { CareerEvent } from '../model/career-event';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TagSearchService {

  public validTags$: Observable<string[]>;

  public filteredTags$: Observable<{ tag: string }[]>;

  public tagFilter$: Subject<string> = new Subject<string>();

  public selectedTags$: Observable<string[]>;

  private index: ElasticLunrIndex<{ tag: string }>;

  constructor(data: DataService,
              activatedRoute: ActivatedRoute,
              private router: Router) {
    this.index = elasticlunr();
    this.index.addField('tag');
    this.index.setRef('tag');

    this.selectedTags$ = activatedRoute.queryParams
      .pipe(
        distinctUntilChanged(),
        pluck('tag'),
        map((t) => t ? t.split(',') : [])
      );

    this.validTags$ = data.events$
      .pipe(
        switchMap((evts: CareerEvent[]) => of(...evts)),
        map((evt: CareerEvent) => evt.tags),
        reduce((acc: Set<string>, value: string[]) => {
          value.forEach((v) => acc.add(v));
          return acc;
        }, new Set<string>()),
        map((tagSet) => Array.from(tagSet)),
        shareReplay(1)
      );

    this.validTags$.subscribe((tags) => tags.forEach((tag) => this.index.addDoc({ tag })));

    this.filteredTags$ = this.tagFilter$
      .pipe(
        switchMap((str) => {
          if (!str || str.length === 0) {
            return of([]);
          }

          return of(this.index.search(str, { expand: true }))
            .pipe(
              map((searchResults: ElasticLunrResult[]) => {
                return searchResults.map((result) => this.index.documentStore.getDoc(result.ref));
              })
            );
        }),
        withLatestFrom(this.selectedTags$),
        map(([filtered, selected]) => filtered.filter((tag) => selected.indexOf(tag.tag) === -1)),
        map((tags) => tags.length === 0 ? null : tags),
        startWith(null),
        shareReplay(1)
      )
    ;
  }

  /**
   * Add a tag to the selection criteria.
   */
  public addTag(newTag: string): void {
    this.selectedTags$
      .pipe(take(1))
      .subscribe(
        {
          next: (tag) => {
            this.navigateTo([...tag, newTag]);
          }
        });
  }

  /**
   * Clear all the tags.
   */
  public clear(): void {
    this.navigateTo([]);
  }

  /**
   * Remove the last tag.
   */
  public removeLast(): void {
    this.selectedTags$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (tag) => {
          if (tag.length > 0) {
            tag.splice(-1);
            this.navigateTo(tag);
          }
        }
      });
  }

  /**
   * Remove a tag from the selection.
   */
  public removeTag(oldTag: string): void {
    this.selectedTags$
      .pipe(
        take(1),
        map((t) => {
          const idx = t.indexOf(oldTag);
          if (idx > -1) {
            t.splice(idx, 1);
          }
          return t;
        })
      ).subscribe(
      {
        next: (tag) => this.navigateTo(tag)
      });
  }

  /**
   * Central router. Might as well.
   */
  private navigateTo(tags: string[]): void {
    const tag = tags.length > 0 ? tags.join(',') : null;
    this.router.navigate(['/'], { queryParams: { tag } });
  }
}
