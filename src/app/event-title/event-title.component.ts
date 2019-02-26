import { Component, Input } from '@angular/core';

@Component({
  selector: 'cv-event-title',
  templateUrl: './event-title.component.html',
  styleUrls: ['./event-title.component.scss']
})
export class EventTitleComponent {

  @Input()
  public title: string;

  @Input()
  public date: Date;

}
