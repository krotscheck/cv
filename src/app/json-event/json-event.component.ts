import { Component } from '@angular/core';
import { CareerEvent } from '../model/career-event';
import { EventRenderer } from '../model/event-renderer';

@Component({
  selector: 'cv-json-event',
  templateUrl: './json-event.component.html',
  styleUrls: ['./json-event.component.scss']
})
export class JsonEventComponent implements EventRenderer {

  public event: CareerEvent;

}
