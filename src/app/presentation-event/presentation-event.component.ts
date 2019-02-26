import { Component, OnInit } from '@angular/core';
import { AbstractEventRendererComponent } from '../abstract-event-renderer/abstract-event-renderer.component';
import { CareerEvent } from '../model/career-event';
import { EventRenderer } from '../model/event-renderer';

@Component({
  selector: 'cv-presentation-event',
  templateUrl: './presentation-event.component.html',
  styleUrls: ['./presentation-event.component.scss']
})
export class PresentationEventComponent extends AbstractEventRendererComponent {

}
