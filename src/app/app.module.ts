import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { EducationEventComponent } from './education-event/education-event.component';
import { EventListItemComponent } from './event-list-item/event-list-item.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventTitleComponent } from './event-title/event-title.component';
import { EventDirective } from './event/event.directive';
import { HeaderComponent } from './header/header.component';
import { JobChangeEventComponent } from './job-change-event/job-change-event.component';
import { JsonEventComponent } from './json-event/json-event.component';
import { ContactIconNamePipe } from './pipe/contact-icon-name.pipe';
import { ContactLinkPipe } from './pipe/contact-link.pipe';
import { PresentationEventComponent } from './presentation-event/presentation-event.component';
import { ProjectEventComponent } from './project-event/project-event.component';
import { TagSearchComponent } from './tag-search/tag-search.component';
import { EventTagsComponent } from './event-tags/event-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TagSearchComponent,
    ContactLinkPipe,
    ContactIconNamePipe,
    EventListComponent,
    EventDirective,
    EventListItemComponent,
    JsonEventComponent,
    ProjectEventComponent,
    JobChangeEventComponent,
    PresentationEventComponent,
    EducationEventComponent,
    EventTitleComponent,
    EventTagsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: EventListComponent
    }]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ProjectEventComponent,
    PresentationEventComponent,
    JobChangeEventComponent,
    EducationEventComponent,
    JsonEventComponent
  ]
})
export class AppModule {

  constructor() {
    library.add(faWordpress);
    library.add(faLinkedin);
    library.add(faTwitter);
    library.add(faGithub);
    library.add(faEnvelope);
    library.add(faTimes);
  }
}
