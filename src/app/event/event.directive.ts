import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cvEventHost]'
})
export class EventDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
