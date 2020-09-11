import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { TagSearchService } from '../services/tag-search.service';

@Component({
  selector: 'cv-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.scss']
})
export class TagSearchComponent {

  /**
   * Placeholder text.
   */
  @Input()
  public placeholder: string;

  /**
   * Search input.
   */
  @ViewChild('searchInput', { static: true })
  public searchInput: ElementRef;

  /**
   * THe public placeholder.
   */
  public placeholder$: Observable<string>;

  /**
   * All the things.
   */
  constructor(public service: TagSearchService) {
    this.placeholder$ = service.selectedTags$
      .pipe(
        map((tags) => tags.length > 0 ? '' : this.placeholder)
      );
  }

  /**
   * The tag string.
   */
  public removeTag(tag: string) {
    this.service.removeTag(tag);
  }

  /**
   * Add a tag.
   */
  public addTag(tag: string) {
    this.service.addTag(tag);
    this.service.tagFilter$.next('');
    this.searchInput.nativeElement.value = '';
  }

  /**
   * Remove last.
   */
  public removeLast(event) {
    if (event.key === 'Backspace') {
      if (event.target.value === '') {
        this.service.removeLast();
      }
    }
  }

  /**
   * Carriage return handler.
   */
  public handleEnter() {
    this.service.filteredTags$
      .pipe(take(1))
      .subscribe((tags) => {
        if (tags && tags.length > 0) {
          this.addTag(tags[0].tag);
        }
      });
  }
}
