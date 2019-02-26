import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-event-tags',
  templateUrl: './event-tags.component.html',
  styleUrls: ['./event-tags.component.scss']
})
export class EventTagsComponent {

  @Input()
  public tags: string[];


}
