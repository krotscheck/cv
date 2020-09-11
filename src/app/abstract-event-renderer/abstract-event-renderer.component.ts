import { HostBinding, Input, Directive } from '@angular/core';
import { CareerEvent } from '../model/career-event';
import { EventRenderer } from '../model/event-renderer';

@Directive()
export abstract class AbstractEventRendererComponent implements EventRenderer {

  /**
   * The date, or end date.
   */
  public date: Date;

  /**
   * The start date.
   */
  public beginDate: Date;

  /**
   * The end date.
   */
  public endDate: Date;

  /**
   * Class binding for the type.
   */
  @HostBinding('class')
  public class: string;

  /**
   * Private event instance.
   */
  private _event: CareerEvent;

  /**
   * Get the event.
   */
  public get event(): CareerEvent {
    return this._event;
  }

  /**
   * Career Event
   */
  @Input()
  public set event(value: CareerEvent) {
    this._event = value;

    this.beginDate = this.buildDate(value.date, 'begin');
    this.endDate = this.buildDate(value.date, 'end');
    this.date = this.buildDate(value.date, 'end');

    this.class = value.type;
  }

  /**
   * The build date.
   */
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
