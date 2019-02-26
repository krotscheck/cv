import {
  Component,
  ComponentFactoryResolver,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { EducationEventComponent } from '../education-event/education-event.component';
import { EventDirective } from '../event/event.directive';
import { JobChangeEventComponent } from '../job-change-event/job-change-event.component';
import { JsonEventComponent } from '../json-event/json-event.component';
import { CareerEvent } from '../model/career-event';
import { EventRenderer } from '../model/event-renderer';
import { PresentationEventComponent } from '../presentation-event/presentation-event.component';
import { ProjectEventComponent } from '../project-event/project-event.component';

@Component({
  selector: 'cv-event-list-item',
  templateUrl: './event-list-item.component.html',
  styleUrls: ['./event-list-item.component.scss']
})

export class EventListItemComponent implements OnInit, OnDestroy {

  /**
   * Class binding for the type.
   */
  @HostBinding('class')
  public class: string;

  /**
   * The event directive.
   */
  @ViewChild(EventDirective)
  public eventHost: EventDirective;

  /**
   * The data source.
   */
  private data$: BehaviorSubject<CareerEvent> = new BehaviorSubject<CareerEvent>(null);

  /**
   * Renderer subscription.
   */
  private subscription: Subscription;

  /**
   * The constructor.
   */
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  /**
   * The inbound career event.
   */
  @Input()
  public set event(evt: CareerEvent) {
    this.data$.next(evt);
  }

  /**
   * On init.
   */
  public ngOnInit() {
    this.subscription = this.data$
      .subscribe((event) => this.loadComponent(event));
  }

  /**
   * Shut down.
   */
  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  /**
   * Load the component.
   */
  public loadComponent(event: CareerEvent) {
    this.class = event.type;

    const componentType = this.getComponentType(event.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    const viewContainerRef = this.eventHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<EventRenderer>componentRef.instance).event = event;
  }

  /**
   * Get the component renderer for this event.
   */
  private getComponentType(type: string): Type<{}> {
    switch (type) {
      case 'project':
        return ProjectEventComponent;
      case 'presentation':
        return PresentationEventComponent;
      case 'job_change':
        return JobChangeEventComponent;
      case 'education':
        return EducationEventComponent;
      default:
        return JsonEventComponent;
    }
  }
}
