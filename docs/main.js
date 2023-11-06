"use strict";
(self["webpackChunkcv"] = self["webpackChunkcv"] || []).push([["main"],{

/***/ 6484:
/*!******************************************************************************!*\
  !*** ./src/app/abstract-event-renderer/abstract-event-renderer.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractEventRendererComponent": () => (/* binding */ AbstractEventRendererComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AbstractEventRendererComponent {
    /**
     * Get the event.
     */
    get event() {
        return this._event;
    }
    /**
     * Career Event
     */
    set event(value) {
        this._event = value;
        this.beginDate = this.buildDate(value.date, 'begin');
        this.endDate = this.buildDate(value.date, 'end');
        this.date = this.buildDate(value.date, 'end');
        this.class = value.type;
    }
    /**
     * The build date.
     */
    buildDate(date, key) {
        let dateString;
        if (typeof date === 'string') {
            dateString = date;
        }
        else {
            dateString = date[key];
        }
        if (dateString === 'current') {
            return new Date();
        }
        return new Date(dateString);
    }
}
AbstractEventRendererComponent.ɵfac = function AbstractEventRendererComponent_Factory(t) { return new (t || AbstractEventRendererComponent)(); };
AbstractEventRendererComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AbstractEventRendererComponent, hostVars: 2, hostBindings: function AbstractEventRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.class);
    } }, inputs: { event: "event" } });


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AppComponent {
    /**
     * Constructor.
     */
    constructor() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["cv-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "cv-header")(1, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5jdi1oZWFkZXIge1xufVxuXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _education_event_education_event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./education-event/education-event.component */ 2737);
/* harmony import */ var _event_list_item_event_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-list-item/event-list-item.component */ 9764);
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-list/event-list.component */ 7637);
/* harmony import */ var _event_title_event_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-title/event-title.component */ 7994);
/* harmony import */ var _event_event_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event.directive */ 5239);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _job_change_event_job_change_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./job-change-event/job-change-event.component */ 7699);
/* harmony import */ var _json_event_json_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./json-event/json-event.component */ 1999);
/* harmony import */ var _pipe_contact_icon_name_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipe/contact-icon-name.pipe */ 9936);
/* harmony import */ var _pipe_contact_link_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipe/contact-link.pipe */ 5412);
/* harmony import */ var _presentation_event_presentation_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./presentation-event/presentation-event.component */ 2337);
/* harmony import */ var _project_event_project_event_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-event/project-event.component */ 6363);
/* harmony import */ var _tag_search_tag_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tag-search/tag-search.component */ 5151);
/* harmony import */ var _event_tags_event_tags_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./event-tags/event-tags.component */ 7186);
/* harmony import */ var _skill_box_skill_box_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./skill-box/skill-box.component */ 6000);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);


























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule.forRoot([{
                    path: '',
                    component: _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__.EventListComponent
                }], { relativeLinkResolution: 'legacy' }),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__.environment.production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent,
        _tag_search_tag_search_component__WEBPACK_IMPORTED_MODULE_13__.TagSearchComponent,
        _pipe_contact_link_pipe__WEBPACK_IMPORTED_MODULE_10__.ContactLinkPipe,
        _pipe_contact_icon_name_pipe__WEBPACK_IMPORTED_MODULE_9__.ContactIconNamePipe,
        _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_3__.EventListComponent,
        _event_event_directive__WEBPACK_IMPORTED_MODULE_5__.EventDirective,
        _event_list_item_event_list_item_component__WEBPACK_IMPORTED_MODULE_2__.EventListItemComponent,
        _json_event_json_event_component__WEBPACK_IMPORTED_MODULE_8__.JsonEventComponent,
        _project_event_project_event_component__WEBPACK_IMPORTED_MODULE_12__.ProjectEventComponent,
        _job_change_event_job_change_event_component__WEBPACK_IMPORTED_MODULE_7__.JobChangeEventComponent,
        _presentation_event_presentation_event_component__WEBPACK_IMPORTED_MODULE_11__.PresentationEventComponent,
        _education_event_education_event_component__WEBPACK_IMPORTED_MODULE_1__.EducationEventComponent,
        _event_title_event_title_component__WEBPACK_IMPORTED_MODULE_4__.EventTitleComponent,
        _event_tags_event_tags_component__WEBPACK_IMPORTED_MODULE_14__.EventTagsComponent,
        _skill_box_skill_box_component__WEBPACK_IMPORTED_MODULE_15__.SkillBoxComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FontAwesomeModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 2737:
/*!**************************************************************!*\
  !*** ./src/app/education-event/education-event.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EducationEventComponent": () => (/* binding */ EducationEventComponent)
/* harmony export */ });
/* harmony import */ var _abstract_event_renderer_abstract_event_renderer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-event-renderer/abstract-event-renderer.component */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _event_title_event_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-title/event-title.component */ 7994);



class EducationEventComponent extends _abstract_event_renderer_abstract_event_renderer_component__WEBPACK_IMPORTED_MODULE_0__.AbstractEventRendererComponent {
}
EducationEventComponent.ɵfac = /*@__PURE__*/ function () { let ɵEducationEventComponent_BaseFactory; return function EducationEventComponent_Factory(t) { return (ɵEducationEventComponent_BaseFactory || (ɵEducationEventComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](EducationEventComponent)))(t || EducationEventComponent); }; }();
EducationEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EducationEventComponent, selectors: [["cv-education-event"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 3, consts: [[3, "title", "date"]], template: function EducationEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cv-event-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.event.title)("date", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.event.institution);
    } }, directives: [_event_title_event_title_component__WEBPACK_IMPORTED_MODULE_1__.EventTitleComponent], styles: ["p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.4rem;\n}\np[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\np[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3R5cG9ncmFwaHkuc2NzcyIsImVkdWNhdGlvbi1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0FGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURDRTtFQUNFLGtCQUFBO0FDQ0oiLCJmaWxlIjoiZWR1Y2F0aW9uLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40cmVtO1xuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxufVxuIiwicCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbn1cbnA6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5wOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn0iXX0= */"] });


/***/ }),

/***/ 9764:
/*!**************************************************************!*\
  !*** ./src/app/event-list-item/event-list-item.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListItemComponent": () => (/* binding */ EventListItemComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _education_event_education_event_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../education-event/education-event.component */ 2737);
/* harmony import */ var _event_event_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/event.directive */ 5239);
/* harmony import */ var _job_change_event_job_change_event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job-change-event/job-change-event.component */ 7699);
/* harmony import */ var _json_event_json_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json-event/json-event.component */ 1999);
/* harmony import */ var _presentation_event_presentation_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../presentation-event/presentation-event.component */ 2337);
/* harmony import */ var _project_event_project_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-event/project-event.component */ 6363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









function EventListItemComponent_ng_template_0_Template(rf, ctx) { }
class EventListItemComponent {
    /**
     * The constructor.
     */
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        /**
         * The data source.
         */
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(null);
    }
    /**
     * The inbound career event.
     */
    set event(evt) {
        this.data$.next(evt);
    }
    /**
     * On init.
     */
    ngOnInit() {
        this.subscription = this.data$
            .subscribe((event) => this.loadComponent(event));
    }
    /**
     * Shut down.
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = null;
        }
    }
    /**
     * Load the component.
     */
    loadComponent(event) {
        this.class = event.type;
        const componentType = this.getComponentType(event.type);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
        const viewContainerRef = this.eventHost.viewContainerRef;
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.event = event;
    }
    /**
     * Get the component renderer for this event.
     */
    getComponentType(type) {
        switch (type) {
            case 'project':
                return _project_event_project_event_component__WEBPACK_IMPORTED_MODULE_5__.ProjectEventComponent;
            case 'presentation':
                return _presentation_event_presentation_event_component__WEBPACK_IMPORTED_MODULE_4__.PresentationEventComponent;
            case 'job_change':
                return _job_change_event_job_change_event_component__WEBPACK_IMPORTED_MODULE_2__.JobChangeEventComponent;
            case 'education':
                return _education_event_education_event_component__WEBPACK_IMPORTED_MODULE_0__.EducationEventComponent;
            default:
                return _json_event_json_event_component__WEBPACK_IMPORTED_MODULE_3__.JsonEventComponent;
        }
    }
}
EventListItemComponent.ɵfac = function EventListItemComponent_Factory(t) { return new (t || EventListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ComponentFactoryResolver)); };
EventListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EventListItemComponent, selectors: [["cv-event-list-item"]], viewQuery: function EventListItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_event_event_directive__WEBPACK_IMPORTED_MODULE_1__.EventDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.eventHost = _t.first);
    } }, hostVars: 2, hostBindings: function EventListItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.class);
    } }, inputs: { event: "event" }, decls: 1, vars: 0, consts: [["cvEventHost", ""]], template: function EventListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, EventListItemComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, directives: [_event_event_directive__WEBPACK_IMPORTED_MODULE_1__.EventDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7637:
/*!****************************************************!*\
  !*** ./src/app/event-list/event-list.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListComponent": () => (/* binding */ EventListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_tag_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tag-search.service */ 8709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _skill_box_skill_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../skill-box/skill-box.component */ 6000);
/* harmony import */ var _event_list_item_event_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event-list-item/event-list-item.component */ 9764);








function EventListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Skills");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "cv-skill-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const about_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](about_r4);
} }
function EventListComponent_ng_container_3_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EventListComponent_ng_container_3_cv_event_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "cv-event-list-item", 4);
} if (rf & 2) {
    const event_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r8);
} }
function EventListComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EventListComponent_ng_container_3_h3_1_Template, 2, 0, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EventListComponent_ng_container_3_cv_event_list_item_2_Template, 1, 1, "cv-event-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const events_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", events_r5.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", events_r5);
} }
function EventListComponent_ng_container_5_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Presentations");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EventListComponent_ng_container_5_cv_event_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "cv-event-list-item", 4);
} if (rf & 2) {
    const event_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r12);
} }
function EventListComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EventListComponent_ng_container_5_h3_1_Template, 2, 0, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EventListComponent_ng_container_5_cv_event_list_item_2_Template, 1, 1, "cv-event-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const events_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", events_r9.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", events_r9);
} }
function EventListComponent_ng_container_7_h3_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Education");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EventListComponent_ng_container_7_cv_event_list_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "cv-event-list-item", 4);
} if (rf & 2) {
    const event_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("event", event_r16);
} }
function EventListComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EventListComponent_ng_container_7_h3_1_Template, 2, 0, "h3", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EventListComponent_ng_container_7_cv_event_list_item_2_Template, 1, 1, "cv-event-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const events_r13 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", events_r13.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", events_r13);
} }
/**
 * The event list.
 */
class EventListComponent {
    constructor(dataService, tagService) {
        this.dataService = dataService;
        this.tagService = tagService;
        const profileText$ = dataService.profile$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((profile) => profile.about), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((about) => about[0].text));
        this.about$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([profileText$, tagService.selectedTags$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([about, tags]) => tags.length > 0 ? about : ''));
        tagService.selectedTags$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((value) => value.length > 0)).subscribe((hasTags) => this.state = hasTags ? 'expand' : 'collapse');
        const all$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([dataService.events$, tagService.selectedTags$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([events, tags]) => {
            if (tags.length === 0) {
                return [];
            }
            if (tags.indexOf('Everything') > -1) {
                return events;
            }
            return events.filter((event) => {
                return tags.filter((tag) => event.tags.indexOf(tag) > -1).length > 0;
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
        this.events$ = all$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((events) => events.filter((event) => ['presentation', 'education'].indexOf(event.type) === -1)));
        this.education$ = all$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((events) => events.filter((event) => event.type === 'education')));
        this.presentations$ = all$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((events) => events.filter((event) => event.type === 'presentation')));
    }
}
EventListComponent.ɵfac = function EventListComponent_Factory(t) { return new (t || EventListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_tag_search_service__WEBPACK_IMPORTED_MODULE_1__.TagSearchService)); };
EventListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EventListComponent, selectors: [["cv-event-list"]], hostVars: 2, hostBindings: function EventListComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.state);
    } }, decls: 9, vars: 12, consts: [[1, "container"], [4, "ngIf"], [1, "about"], [3, "event", 4, "ngFor", "ngForOf"], [3, "event"]], template: function EventListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EventListComponent_ng_container_1_Template, 8, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EventListComponent_ng_container_3_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, EventListComponent_ng_container_5_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EventListComponent_ng_container_7_Template, 3, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, ctx.about$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, ctx.events$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 8, ctx.presentations$));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 10, ctx.education$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _skill_box_skill_box_component__WEBPACK_IMPORTED_MODULE_2__.SkillBoxComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _event_list_item_event_list_item_component__WEBPACK_IMPORTED_MODULE_3__.EventListItemComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0px;\n  overflow-y: scroll;\n  align-items: center;\n  justify-content: stretch;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3rem;\n  transition: padding-top 1s, padding-bottom 1s, height 1s;\n}\n@media print {\n  [_nghost-%COMP%] {\n    overflow-y: inherit;\n  }\n}\n[_nghost-%COMP%]   .about[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  transition: padding-top 1s, padding-bottom 1s, height 1s;\n  width: 100%;\n  max-width: 860px;\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #BBBBBB;\n  font-size: 24px;\n  font-weight: 500;\n  height: 33px;\n  letter-spacing: -0.8px;\n  line-height: 32.4px;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   cv-event-list-item[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   cv-event-list-item.job_change[_ngcontent-%COMP%] {\n  padding-left: 0;\n  margin-top: 0.5rem;\n}\n[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-bottom: 2rem;\n}\n.expand[_nghost-%COMP%] {\n  height: 100%;\n}\n.expand[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-bottom: 1.5em;\n  padding-top: 1.5em;\n}\n.collapse[_nghost-%COMP%] {\n  height: 0;\n}\n.collapse[_nghost-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-top: 0em;\n  padding-bottom: 0em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7RUFDQSx3QkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsd0RBQUE7QUFKRjtBQU1FO0VBZEY7SUFlSSxtQkFBQTtFQUhGO0FBQ0Y7QUFLRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0Usd0RBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFKSjtBQU1JO0VBQ0UsZ0JBQUE7QUFKTjtBQU9JO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTE47QUFRSTtFQUNFLGtCQUFBO0FBTk47QUFRTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQU5SO0FBV0k7RUFDRSxtQkFBQTtBQVROO0FBYUU7RUFDRSxZQUFBO0FBWEo7QUFhSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFYTjtBQWVFO0VBQ0UsU0FBQTtBQWJKO0FBZUk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBYk4iLCJmaWxlIjoiZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XG5cbiAgdHJhbnNpdGlvbjogcGFkZGluZy10b3AgMXMsIHBhZGRpbmctYm90dG9tIDFzLCBoZWlnaHQgMXM7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBvdmVyZmxvdy15OiBpbmhlcml0O1xuICB9XG5cbiAgLmFib3V0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB0cmFuc2l0aW9uOiBwYWRkaW5nLXRvcCAxcywgcGFkZGluZy1ib3R0b20gMXMsIGhlaWdodCAxcztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDg2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYgPiAqIHtcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5X2xpZ2h0O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGhlaWdodDogMzNweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XG4gICAgICBsaW5lLWhlaWdodDogMzIuNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICBjdi1ldmVudC1saXN0LWl0ZW0ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuXG4gICAgICAmLmpvYl9jaGFuZ2Uge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICAvL21hcmdpbi1ib3R0b206IC41cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIDpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxuICB9XG5cbiAgJi5leHBhbmQge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgICAgcGFkZGluZy10b3A6IDEuNWVtO1xuICAgIH1cbiAgfVxuXG4gICYuY29sbGFwc2Uge1xuICAgIGhlaWdodDogMDtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgcGFkZGluZy10b3A6IDBlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 7186:
/*!****************************************************!*\
  !*** ./src/app/event-tags/event-tags.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTagsComponent": () => (/* binding */ EventTagsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function EventTagsComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
} }
class EventTagsComponent {
}
EventTagsComponent.ɵfac = function EventTagsComponent_Factory(t) { return new (t || EventTagsComponent)(); };
EventTagsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventTagsComponent, selectors: [["cv-event-tags"]], inputs: { tags: "tags" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function EventTagsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventTagsComponent_span_0_Template, 2, 1, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["[_nghost-%COMP%] {\n  color: #BBBBBB;\n  display: block;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \", \";\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%]:last-child::after {\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LXRhZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBRjtBQUVFO0VBQ0UsYUFBQTtBQUFKO0FBR0U7RUFDRSxXQUFBO0FBREoiLCJmaWxlIjoiZXZlbnQtdGFncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcbjpob3N0IHtcbiAgY29sb3I6ICRncmV5X2xpZ2h0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuXG4gIHNwYW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiLCBcIjtcbiAgfVxuXG4gIHNwYW46bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7994:
/*!******************************************************!*\
  !*** ./src/app/event-title/event-title.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventTitleComponent": () => (/* binding */ EventTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


class EventTitleComponent {
}
EventTitleComponent.ɵfac = function EventTitleComponent_Factory(t) { return new (t || EventTitleComponent)(); };
EventTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventTitleComponent, selectors: [["cv-event-title"]], inputs: { title: "title", date: "date" }, decls: 5, vars: 5, consts: [[1, "date"]], template: function EventTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx.date, "MMMM d, yyyy"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  border-bottom: 1px solid #DDDDDD;\n  margin-bottom: 0.4rem;\n  padding-bottom: 0.2rem;\n}\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 16px;\n}\n[_nghost-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #BBBBBB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LXRpdGxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQURGO0FBR0U7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBREo7QUFJRTtFQUNFLGNDakJTO0FEZWIiLCJmaWxlIjoiZXZlbnQtdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXlfbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogLjRyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMnJlbTtcblxuICBoNCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG5cbiAgLmRhdGUge1xuICAgIGNvbG9yOiAkZ3JleV9saWdodDtcbiAgfVxufVxuIiwiXG4kZ3JleV9saWdodGVyOiAjREREREREO1xuJGdyZXlfbGlnaHQ6ICNCQkJCQkI7XG4kZ3JleTogIzk5OTk5OTtcblxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzppbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICBib3gtc2hhZG93Omluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5239:
/*!******************************************!*\
  !*** ./src/app/event/event.directive.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDirective": () => (/* binding */ EventDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class EventDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
EventDirective.ɵfac = function EventDirective_Factory(t) { return new (t || EventDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
EventDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: EventDirective, selectors: [["", "cvEventHost", ""]] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_tag_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tag-search.service */ 8709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tag_search_tag_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tag-search/tag-search.component */ 5151);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);
/* harmony import */ var _pipe_contact_link_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipe/contact-link.pipe */ 5412);
/* harmony import */ var _pipe_contact_icon_name_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipe/contact-icon-name.pipe */ 9936);









function HeaderComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_0_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r4.everything(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Show me everything ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "cv-tag-search", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HeaderComponent_div_0_button_4_Template, 2, 0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](profile_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 2, ctx_r0.hasNoTags$));
} }
function HeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "contactLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "contactIconName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const contact_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("classList", "icon ", contact_r6.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 4, contact_r6), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](contact_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 6, contact_r6));
} }
/**
 * Shared header.
 */
class HeaderComponent {
    /**
     * Constructor.
     */
    constructor(data, tags) {
        this.data = data;
        this.tags = tags;
        tags.selectedTags$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((t) => t.length > 0 ? 'collapse' : 'expand')).subscribe((value) => this.state = value);
        this.hasNoTags$ = tags.selectedTags$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(value => !value.length));
        this.profile$ = data.profile$;
        this.contacts$ = data.profile$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((profile) => profile && profile.contact || []));
    }
    /**
     * Choose all items in the CV.
     */
    everything() {
        this.tags.clear();
        this.tags.addTag('Everything');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_tag_search_service__WEBPACK_IMPORTED_MODULE_1__.TagSearchService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["cv-header"]], hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.state);
    } }, decls: 5, vars: 6, consts: [["class", "profile", 4, "ngIf"], [1, "contact-icons"], ["target", "_blank", 3, "classList", "href", 4, "ngFor", "ngForOf"], [1, "profile"], ["placeholder", "This is my Resum\u00E9. What are you looking for?", 1, "no-print"], [3, "click", 4, "ngIf"], [3, "click"], ["target", "_blank", 3, "classList", "href"], [1, "label"], [1, "icon"], [3, "icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HeaderComponent_div_0_Template, 6, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 7, 8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.profile$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, ctx.contacts$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _tag_search_tag_search_component__WEBPACK_IMPORTED_MODULE_2__.TagSearchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__.FaIconComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _pipe_contact_link_pipe__WEBPACK_IMPORTED_MODULE_3__.ContactLinkPipe, _pipe_contact_icon_name_pipe__WEBPACK_IMPORTED_MODULE_4__.ContactIconNamePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  padding: 6px;\n  border-bottom: 1px solid #BBBBBB;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  transition: height 1s;\n}\n@media print {\n  [_nghost-%COMP%]   cv-tag-search[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.expand[_nghost-%COMP%] {\n  height: 100%;\n}\n.expand[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #DDDDDD;\n}\n.expand[_nghost-%COMP%]   .contact-icons[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n@media screen {\n  .collapse[_nghost-%COMP%] {\n    height: 130px;\n    min-height: 130px;\n  }\n  .collapse[_nghost-%COMP%]   .contact-icons[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .collapse[_nghost-%COMP%]   .contact-icons[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\n    display: inherit;\n  }\n}\n@media print {\n  .collapse[_nghost-%COMP%] {\n    position: relative;\n    height: 80px;\n    min-height: 80px;\n  }\n  .collapse[_nghost-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: black;\n  }\n  .collapse[_nghost-%COMP%]   .contact-icons[_ngcontent-%COMP%] {\n    flex-direction: row;\n    display: flex;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n  .collapse[_nghost-%COMP%]   .contact-icons[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%] {\n    color: black;\n    height: 20px;\n  }\n  .collapse[_nghost-%COMP%]   .contact-icons[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    display: inherit;\n  }\n  .collapse[_nghost-%COMP%]   .contact-icons[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.collapse[_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 0;\n  margin-bottom: -4rem;\n  cursor: default;\n}\n.collapse[_nghost-%COMP%]   .contact-icons[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.profile[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.profile[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.profile[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\nh1[_ngcontent-%COMP%] {\n  transition: color 1s;\n  color: #BBBBBB;\n  font-weight: 400;\n  letter-spacing: 0.05rem;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nbutton[_ngcontent-%COMP%] {\n  transition: opacity 1s, margin-bottom 1s;\n  height: 38px;\n  padding: 0 30px;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: 0.1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid white;\n  color: #BBBBBB;\n  cursor: pointer;\n  box-sizing: border-box;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  border-color: #999;\n  color: #333;\n  box-shadow: 2px 2px 5px #BBBBBB;\n}\nbutton[_ngcontent-%COMP%]:active {\n  border-color: #999;\n  color: #333;\n  box-shadow: none;\n}\ncv-tag-search[_ngcontent-%COMP%] {\n  width: 80%;\n  max-width: 600px;\n}\n.contact-icons[_ngcontent-%COMP%] {\n  transition: opacity 1s;\n  display: block;\n  flex-direction: column;\n  justify-content: center;\n  opacity: 1;\n  position: absolute;\n  right: 0;\n}\n.contact-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1px 6px;\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: flex-end;\n  font-size: 0.7em;\n  color: #BBBBBB;\n}\n.contact-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #BBBBBB;\n}\n.contact-icons[_ngcontent-%COMP%]   a.linkedin[_ngcontent-%COMP%]:hover {\n  color: #0077b5;\n}\n.contact-icons[_ngcontent-%COMP%]   a.linkedin[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-color: #0077b5;\n}\n.contact-icons[_ngcontent-%COMP%]   a.twitter[_ngcontent-%COMP%]:hover {\n  color: #00aced;\n}\n.contact-icons[_ngcontent-%COMP%]   a.twitter[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-color: #00aced;\n}\n.contact-icons[_ngcontent-%COMP%]   a.wordpress[_ngcontent-%COMP%]:hover {\n  color: #21759b;\n}\n.contact-icons[_ngcontent-%COMP%]   a.wordpress[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-color: #21759b;\n}\n.contact-icons[_ngcontent-%COMP%]   a.email[_ngcontent-%COMP%]:hover {\n  color: #B23121;\n}\n.contact-icons[_ngcontent-%COMP%]   a.email[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-color: #B23121;\n}\n.contact-icons[_ngcontent-%COMP%]   a.github[_ngcontent-%COMP%]:hover {\n  color: #000000;\n}\n.contact-icons[_ngcontent-%COMP%]   a.github[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: #000000;\n}\n.contact-icons[_ngcontent-%COMP%]   a.phone[_ngcontent-%COMP%]:hover {\n  color: #AAAAAA;\n}\n.contact-icons[_ngcontent-%COMP%]   a.phone[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  background-color: #AAAAAA;\n}\n.contact-icons[_ngcontent-%COMP%]   span.icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin-left: 6px;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  color: #FFFFFF;\n  background-color: #BBBBBB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLHFCQUFBO0FBSkY7QUFNRTtFQUNFO0lBQ0UsYUFBQTtFQUpKO0FBQ0Y7QUFPRTtFQUNFLFlBQUE7QUFMSjtBQU9JO0VBQ0UsY0N2QlM7QURrQmY7QUFRSTtFQUNFLFVBQUE7QUFOTjtBQVlJO0VBRkY7SUFHSSxhQUFBO0lBQ0EsaUJBQUE7RUFUSjtFQWFNO0lBQ0UsYUFBQTtFQVhSO0VBY007SUFDRSxnQkFBQTtFQVpSO0FBQ0Y7QUFnQkk7RUFsQkY7SUFtQkksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUFiSjtFQWVJO0lBQ0UsWUFBQTtFQWJOO0VBZ0JJO0lBQ0UsbUJBQUE7SUFDQSxhQUFBO0lBRUEsa0JBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUFmTjtFQWlCTTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBZlI7RUFrQk07SUFDRSxnQkFBQTtFQWhCUjtFQW1CTTtJQUNFLGFBQUE7RUFqQlI7QUFDRjtBQXNCSTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFwQk47QUF1Qkk7RUFDRSxVQUFBO0FBckJOO0FBMEJBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXZCRjtBQXlCRTtFQUNFLGFBQUE7QUF2Qko7QUEwQkU7RUFDRSxnQkFBQTtBQXhCSjtBQTZCQTtFQUNFLG9CQUFBO0VBQ0EsY0NsSFc7RURtSFgsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQTFCRjtBQTZCQTtFQUNFLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQ3hJVztFRHlJWCxlQUFBO0VBQ0Esc0JBQUE7QUExQkY7QUE0QkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUNuSUEsK0JBQUE7QUQ0R0o7QUE0QkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFJQSxnQkFBQTtBQTNCSjtBQStCQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQTVCRjtBQWdDQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0JBQUE7RUFDQSxRQUFBO0FBOUJGO0FBZ0NFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDcExTO0FEc0piO0FBZ0NJO0VBQ0UsY0N2TE87QUR5SmI7QUFpQ0k7RUFLRSxjQUFBO0FBbkNOO0FBK0JNO0VBQ0UseUJBQUE7QUE3QlI7QUFtQ0k7RUFLRSxjQUFBO0FBckNOO0FBaUNNO0VBQ0UseUJBQUE7QUEvQlI7QUFxQ0k7RUFLRSxjQUFBO0FBdkNOO0FBbUNNO0VBQ0UseUJBQUE7QUFqQ1I7QUF1Q0k7RUFLRSxjQUFBO0FBekNOO0FBcUNNO0VBQ0UseUJBQUE7QUFuQ1I7QUF5Q0k7RUFNRSxjQUFBO0FBNUNOO0FBdUNNO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBckNSO0FBMkNJO0VBS0UsY0FBQTtBQTdDTjtBQXlDTTtFQUNFLHlCQUFBO0FBdkNSO0FBOENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFFQSx5QkN4UFM7QUQwTWIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdmFyaWFibGVzJztcblxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5X2xpZ2h0O1xuXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHRyYW5zaXRpb246IGhlaWdodCAxcztcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIGN2LXRhZy1zZWFyY2gge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmLmV4cGFuZCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgaDEge1xuICAgICAgY29sb3I6ICRncmV5X2xpZ2h0ZXI7XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtaWNvbnMge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAmLmNvbGxhcHNlIHtcblxuICAgIEBtZWRpYSBzY3JlZW4ge1xuICAgICAgaGVpZ2h0OiAxMzBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xuXG4gICAgICAuY29udGFjdC1pY29ucyB7XG5cbiAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Bhbi5pY29uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHByaW50IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogODBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG5cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuXG4gICAgICAuY29udGFjdC1pY29ucyB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuXG4gICAgICAgIGEuaWNvbiB7XG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4uaWNvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB9XG5cbiAgICAuY29udGFjdC1pY29ucyB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuXG4ucHJvZmlsZSB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG5cbiAgJiA+ICoge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cblxufVxuXG5oMSB7XG4gIHRyYW5zaXRpb246IGNvbG9yIDFzO1xuICBjb2xvcjogJGdyZXlfbGlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAuMDVyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMsIG1hcmdpbi1ib3R0b20gMXM7XG4gIGhlaWdodDogMzhweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6ICRncmV5X2xpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTk5O1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdygycHgsIDJweCwgNXB4LCAkZ3JleV9saWdodCk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjOTk5O1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG59XG5cbmN2LXRhZy1zZWFyY2gge1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG5cbi5jb250YWN0LWljb25zIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvcGFjaXR5OiAxO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG5cbiAgYSB7XG4gICAgcGFkZGluZzogMXB4IDZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBmb250LXNpemU6IC43ZW07XG4gICAgY29sb3I6ICRncmV5X2xpZ2h0O1xuXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiAkZ3JleV9saWdodDtcbiAgICB9XG5cbiAgICAmLmxpbmtlZGluOmhvdmVyIHtcbiAgICAgIC5pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzdiNTtcbiAgICAgIH1cblxuICAgICAgY29sb3I6ICMwMDc3YjU7XG4gICAgfVxuXG4gICAgJi50d2l0dGVyOmhvdmVyIHtcbiAgICAgIC5pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYWNlZDtcbiAgICAgIH1cblxuICAgICAgY29sb3I6ICMwMGFjZWQ7XG4gICAgfVxuXG4gICAgJi53b3JkcHJlc3M6aG92ZXIge1xuICAgICAgLmljb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE3NTliO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogIzIxNzU5YjtcbiAgICB9XG5cbiAgICAmLmVtYWlsOmhvdmVyIHtcbiAgICAgIC5pY29uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IyMzEyMTtcbiAgICAgIH1cblxuICAgICAgY29sb3I6ICNCMjMxMjE7XG4gICAgfVxuXG4gICAgJi5naXRodWI6aG92ZXIge1xuICAgICAgLmljb24ge1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgIH1cblxuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgJi5waG9uZTpob3ZlciB7XG4gICAgICAuaWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNBQUFBQUE7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiAjQUFBQUFBO1xuICAgIH1cbiAgfVxuXG4gIHNwYW4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcblxuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXlfbGlnaHQ7XG5cbiAgfVxufVxuIiwiXG4kZ3JleV9saWdodGVyOiAjREREREREO1xuJGdyZXlfbGlnaHQ6ICNCQkJCQkI7XG4kZ3JleTogIzk5OTk5OTtcblxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzppbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICBib3gtc2hhZG93Omluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7699:
/*!****************************************************************!*\
  !*** ./src/app/job-change-event/job-change-event.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobChangeEventComponent": () => (/* binding */ JobChangeEventComponent)
/* harmony export */ });
/* harmony import */ var _abstract_event_renderer_abstract_event_renderer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-event-renderer/abstract-event-renderer.component */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



class JobChangeEventComponent extends _abstract_event_renderer_abstract_event_renderer_component__WEBPACK_IMPORTED_MODULE_0__.AbstractEventRendererComponent {
}
JobChangeEventComponent.ɵfac = /*@__PURE__*/ function () { let ɵJobChangeEventComponent_BaseFactory; return function JobChangeEventComponent_Factory(t) { return (ɵJobChangeEventComponent_BaseFactory || (ɵJobChangeEventComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](JobChangeEventComponent)))(t || JobChangeEventComponent); }; }();
JobChangeEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JobChangeEventComponent, selectors: [["cv-job-change-event"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 9, vars: 10, consts: [[1, "title"], [1, "minor"]], template: function JobChangeEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "//");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.event.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.event.employer, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 4, ctx.beginDate, "MMMM, yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, ctx.endDate, "MMMM, yyyy"), "\n");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["[_nghost-%COMP%] {\n  background-color: #EEEEEE;\n  padding: 0.5rem 1rem 0.5rem 1rem;\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: row;\n  color: #BBBBBB;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n[_nghost-%COMP%]   .minor[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media print {\n  [_nghost-%COMP%] {\n    -webkit-print-color-adjust: exact;\n    color: black;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1jaGFuZ2UtZXZlbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGNDUlc7QURLYjtBQUtFO0VBQ0UsY0FBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtBQUpKO0FBUUE7RUFDRTtJQUNFLGlDQUFBO0lBQ0EsWUFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoiam9iLWNoYW5nZS1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi92YXJpYWJsZXNcIjtcblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtIC41cmVtIDFyZW07XG4gIG1hcmdpbi10b3A6IC41cmVtO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgY29sb3I6ICRncmV5X2xpZ2h0O1xuXG4gIC50aXRsZSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cblxuICAubWlub3Ige1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIDpob3N0IHtcbiAgICAtd2Via2l0LXByaW50LWNvbG9yLWFkanVzdDogZXhhY3Q7XG4gICAgY29sb3I6IGJsYWNrOztcbiAgfVxufVxuIiwiXG4kZ3JleV9saWdodGVyOiAjREREREREO1xuJGdyZXlfbGlnaHQ6ICNCQkJCQkI7XG4kZ3JleTogIzk5OTk5OTtcblxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzppbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICBib3gtc2hhZG93Omluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1999:
/*!****************************************************!*\
  !*** ./src/app/json-event/json-event.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonEventComponent": () => (/* binding */ JsonEventComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class JsonEventComponent {
}
JsonEventComponent.ɵfac = function JsonEventComponent_Factory(t) { return new (t || JsonEventComponent)(); };
JsonEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsonEventComponent, selectors: [["cv-json-event"]], decls: 1, vars: 1, template: function JsonEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.event.type, "\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqc29uLWV2ZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7624:
/*!***************************************!*\
  !*** ./src/app/lunr/configuration.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Configuration": () => (/* binding */ Configuration)
/* harmony export */ });
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */
/**
 * Configuration is used to analyze the user search configuration.
 *
 * By Configuration user could set query-time boosting, boolean model in each field.
 *
 * Currently configuration supports:
 * 1. query-time boosting, user could set how to boost each field.
 * 2. boolean model chosing, user could choose which boolean model to use for each field.
 * 3. token expansion, user could set token expand to True to improve Recall. Default is False.
 *
 * Query time boosting must be configured by field category, "boolean" model could be configured
 * by both field category or globally as the following example. Field configuration for "boolean"
 * will overwrite global configuration.
 * Token expand could be configured both by field category or golbally. Local field configuration will
 * overwrite global configuration.
 *
 * configuration example:
 * {
 *   fields:{
 *     title: {boost: 2},
 *     body: {boost: 1}
 *   },
 *   bool: "OR"
 * }
 *
 * "bool" field configuration overwrite global configuration example:
 * {
 *   fields:{
 *     title: {boost: 2, bool: "AND"},
 *     body: {boost: 1}
 *   },
 *   bool: "OR"
 * }
 *
 * "expand" example:
 * {
 *   fields:{
 *     title: {boost: 2, bool: "AND"},
 *     body: {boost: 1}
 *   },
 *   bool: "OR",
 *   expand: true
 * }
 *
 * "expand" example for field category:
 * {
 *   fields:{
 *     title: {boost: 2, bool: "AND", expand: true},
 *     body: {boost: 1}
 *   },
 *   bool: "OR"
 * }
 *
 * setting the boost to 0 ignores the field (this will only search the title):
 * {
 *   fields:{
 *     title: {boost: 1},
 *     body: {boost: 0}
 *   }
 * }
 *
 * then, user could search with configuration to do query-time boosting.
 * idx.search('oracle database', {fields: {title: {boost: 2}, body: {boost: 1}}});
 */
class Configuration {
    /**
     * Constructor, create a new instance using either a list of fields to index, or an explicit field configuration.
     */
    constructor(fields, config) {
        /**
         * Internal index configuration.
         */
        this.config = {};
        if (!fields || fields.length === 0) {
            throw new Error('fields should not be empty');
        }
        if (!config) {
            this.buildDefaultConfig(fields);
        }
        else {
            this.buildUserConfig(fields, config);
        }
    }
    /**
     * get current user configuration
     */
    get() {
        return this.config;
    }
    ;
    /**
     * Build default search configuration.
     */
    buildDefaultConfig(fields) {
        for (let field of fields) {
            if (!this.config.fields) {
                this.config.fields = {};
            }
            this.config.fields[field] = {
                boost: 1,
                bool: 'OR',
                expand: false
            };
        }
    }
    ;
    /**
     * Build a normalized configuration from the provided fields and config elements.
     */
    buildUserConfig(fields, config) {
        let global_bool = (config === null || config === void 0 ? void 0 : config.bool) || 'OR';
        let global_expand = (config === null || config === void 0 ? void 0 : config.expand) || false;
        if (config === null || config === void 0 ? void 0 : config.fields) {
            for (let field in config === null || config === void 0 ? void 0 : config.fields) {
                const field_config = config.fields[field];
                let field_expand = global_expand;
                if (field_config.expand !== undefined) {
                    field_expand = field_config.expand;
                }
                if (!this.config.fields) {
                    this.config.fields = {};
                }
                this.config.fields[field] = {
                    boost: (field_config.boost || field_config.boost === 0) ? field_config.boost : 1,
                    bool: field_config.bool || global_bool,
                    expand: field_expand
                };
            }
        }
        else {
            this.addAllFields2UserConfig(global_bool, global_expand, fields);
        }
    }
    /**
     * Add all fields to user search configuration.
     */
    addAllFields2UserConfig(bool, expand, fields) {
        if (!this.config.fields) {
            this.config.fields = {};
        }
        for (let field of fields) {
            this.config.fields[field] = {
                boost: 1,
                bool: bool,
                expand: expand
            };
        }
    }
}


/***/ }),

/***/ 2233:
/*!****************************************!*\
  !*** ./src/app/lunr/document-store.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentStore": () => (/* binding */ DocumentStore)
/* harmony export */ });
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */
/**
 * DocumentStore is a simple key-value document store used for storing sets of tokens for
 * documents stored in index. It stores both the original document and the field
 * length for each encountered value.
 */
class DocumentStore {
    /**
     * In memory store of the documents used in the search.
     */
    constructor(idField) {
        /**
         * Stored documents that have been indexed.
         */
        this.docs = new Map();
        /**
         * A stored map of docs->fields->fieldLength
         */
        this.docInfo = new Map();
        this._idField = idField;
    }
    /**
     * The current size of the document store.
     */
    get length() {
        return this.docInfo.size;
    }
    /**
     * The ID by which the document is identified.
     */
    get idField() {
        return this._idField;
    }
    /**
     * Stores the given doc in the document store against the given id.
     * If docRef already exist, then update doc.
     *
     * Document is store by original JSON format, then you could use original document to generate search snippets.
     */
    addDoc(doc) {
        const docRef = doc[this.idField];
        this.docs.set(docRef, this.clone(doc));
        this.docInfo.set(docRef, new Map());
    }
    /**
     * Reset the document store and clear out all values.
     */
    clear() {
        this.docInfo.clear();
        this.docs.clear();
    }
    /**
     * Retrieves the JSON doc from the document store for a given key.
     *
     * If docRef not found, return null.
     * If user set not storing the documents, return null.
     */
    getDoc(ref) {
        return this.docs.get(ref);
    }
    /**
     * Checks whether the document store contains a key (docRef).
     */
    hasDoc(ref) {
        return this.docs.has(ref);
    }
    /**
     * Removes the value for a key in the document store.
     */
    removeDoc(ref) {
        this.docs.delete(ref);
        this.docInfo.delete(ref);
    }
    /**
     * Add field length of a document's field tokens from pipeline results.
     * The field length of a document is used to do field length normalization
     * even without the original JSON document stored.
     */
    setFieldLength(ref, fieldName, length) {
        if (!ref || !this.hasDoc(ref)) {
            return;
        }
        if (!this.docInfo.has(ref)) {
            this.docInfo.set(ref, new Map());
        }
        this.docInfo.get(ref).set(fieldName, length);
    }
    /**
     * get field length of a document by docRef
     */
    getFieldLength(docRef, fieldName) {
        var _a, _b;
        return ((_b = (_a = this.docInfo) === null || _a === void 0 ? void 0 : _a.get(docRef)) === null || _b === void 0 ? void 0 : _b.get(fieldName)) || 0;
    }
    /**
     * Cloning object
     */
    clone(obj) {
        if (null === obj || 'object' !== typeof obj) {
            return obj;
        }
        let copy = obj.constructor();
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr)) {
                copy[attr] = obj[attr];
            }
        }
        return copy;
    }
}


/***/ }),

/***/ 5432:
/*!*****************************************!*\
  !*** ./src/app/lunr/filters/stemmer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stemmer": () => (/* binding */ stemmer)
/* harmony export */ });
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */
const step2list = {
    'ational': 'ate',
    'tional': 'tion',
    'enci': 'ence',
    'anci': 'ance',
    'izer': 'ize',
    'bli': 'ble',
    'alli': 'al',
    'entli': 'ent',
    'eli': 'e',
    'ousli': 'ous',
    'ization': 'ize',
    'ation': 'ate',
    'ator': 'ate',
    'alism': 'al',
    'iveness': 'ive',
    'fulness': 'ful',
    'ousness': 'ous',
    'aliti': 'al',
    'iviti': 'ive',
    'biliti': 'ble',
    'logi': 'log'
};
const step3list = {
    'icate': 'ic',
    'ative': '',
    'alize': 'al',
    'iciti': 'ic',
    'ical': 'ic',
    'ful': '',
    'ness': ''
};
const c = '[^aeiou]'; // consonant
const v = '[aeiouy]'; // vowel
const C = c + '[^aeiouy]*'; // consonant sequence
const V = v + '[aeiou]*'; // vowel sequence
const mgr0 = '^(' + C + ')?' + V + C; // [C]VC... is m>0
const meq1 = '^(' + C + ')?' + V + C + '(' + V + ')?$'; // [C]VC[V] is m=1
const mgr1 = '^(' + C + ')?' + V + C + V + C; // [C]VCVC... is m>1
const s_v = '^(' + C + ')?' + v; // vowel in stem
const re_mgr0 = new RegExp(mgr0);
const re_mgr1 = new RegExp(mgr1);
const re_meq1 = new RegExp(meq1);
const re_s_v = new RegExp(s_v);
const re_1a = /^(.+?)(ss|i)es$/;
const re2_1a = /^(.+?)([^s])s$/;
const re_1b = /^(.+?)eed$/;
const re2_1b = /^(.+?)(ed|ing)$/;
const re_1b_2 = /.$/;
const re2_1b_2 = /(at|bl|iz)$/;
const re3_1b_2 = new RegExp('([^aeiouylsz])\\1$');
const re4_1b_2 = new RegExp('^' + C + v + '[^aeiouwxy]$');
const re_1c = /^(.+?[^aeiou])y$/;
const re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;
const re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;
const re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
const re2_4 = /^(.+?)(s|t)(ion)$/;
const re_5 = /^(.+?)e$/;
const re_5_1 = /ll$/;
const re3_5 = new RegExp('^' + C + v + '[^aeiouwxy]$');
/**
 * stemmer is an english language stemmer, this is a JavaScript
 * implementation of the PorterStemmer taken from http://tartarus.org/~martin
 */
function stemmer(w) {
    if (!w) {
        return undefined;
    }
    let stem, suffix, firstch, re, re2, re3, re4;
    if (w.length < 3) {
        return w;
    }
    firstch = w.substr(0, 1);
    if (firstch == 'y') {
        w = firstch.toUpperCase() + w.substr(1);
    }
    // Step 1a
    re = re_1a;
    re2 = re2_1a;
    if (re.test(w)) {
        w = w.replace(re, '$1$2');
    }
    else if (re2.test(w)) {
        w = w.replace(re2, '$1$2');
    }
    // Step 1b
    re = re_1b;
    re2 = re2_1b;
    if (re.test(w)) {
        let fp = re.exec(w);
        re = re_mgr0;
        if (re.test(fp[1])) {
            re = re_1b_2;
            w = w.replace(re, '');
        }
    }
    else if (re2.test(w)) {
        let fp = re2.exec(w);
        stem = fp[1];
        re2 = re_s_v;
        if (re2.test(stem)) {
            w = stem;
            re2 = re2_1b_2;
            re3 = re3_1b_2;
            re4 = re4_1b_2;
            if (re2.test(w)) {
                w = w + 'e';
            }
            else if (re3.test(w)) {
                re = re_1b_2;
                w = w.replace(re, '');
            }
            else if (re4.test(w)) {
                w = w + 'e';
            }
        }
    }
    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
    re = re_1c;
    if (re.test(w)) {
        let fp = re.exec(w);
        stem = fp[1];
        w = stem + 'i';
    }
    // Step 2
    re = re_2;
    if (re.test(w)) {
        let fp = re.exec(w);
        stem = fp[1];
        suffix = fp[2];
        re = re_mgr0;
        if (re.test(stem)) {
            w = stem + step2list[suffix];
        }
    }
    // Step 3
    re = re_3;
    if (re.test(w)) {
        let fp = re.exec(w);
        stem = fp[1];
        suffix = fp[2];
        re = re_mgr0;
        if (re.test(stem)) {
            w = stem + step3list[suffix];
        }
    }
    // Step 4
    re = re_4;
    re2 = re2_4;
    if (re.test(w)) {
        let fp = re.exec(w);
        stem = fp[1];
        re = re_mgr1;
        if (re.test(stem)) {
            w = stem;
        }
    }
    else if (re2.test(w)) {
        let fp = re2.exec(w);
        stem = fp[1] + fp[2];
        re2 = re_mgr1;
        if (re2.test(stem)) {
            w = stem;
        }
    }
    // Step 5
    re = re_5;
    if (re.test(w)) {
        let fp = re.exec(w);
        stem = fp[1];
        re = re_mgr1;
        re2 = re_meq1;
        re3 = re3_5;
        if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
            w = stem;
        }
    }
    re = re_5_1;
    re2 = re_mgr1;
    if (re.test(w) && re2.test(w)) {
        re = re_1b_2;
        w = w.replace(re, '');
    }
    // and turn initial Y back to y
    if (firstch == 'y') {
        w = firstch.toLowerCase() + w.substr(1);
    }
    return w;
}


/***/ }),

/***/ 3684:
/*!******************************************!*\
  !*** ./src/app/lunr/filters/stopword.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultStopWords": () => (/* binding */ DefaultStopWords),
/* harmony export */   "defaultStopWordFilter": () => (/* binding */ defaultStopWordFilter),
/* harmony export */   "stopWordFilter": () => (/* binding */ stopWordFilter)
/* harmony export */ });
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */
/**
 * defaultStopWordFilter is an English language stop words filter, any words
 * contained in the stop word list will not be passed through the filter.
 *
 * This is intended to be used in the Pipeline. If the token does not pass the
 * filter then undefined will be returned.
 * Currently this StopwordFilter using dictionary to do O(1) time complexity stop word filtering.
 */
function defaultStopWordFilter() {
    return stopWordFilter(...DefaultStopWords);
}
/**
 * Construct a stopword filter provided a list of stopwords. You may generate your own,
 * or use the provided DefaultStopWords to seed your own filter lambda.
 */
function stopWordFilter(...stopWords) {
    const stopWordMap = new Set(stopWords);
    return (w) => !w || stopWordMap.has(w) ? undefined : w;
}
/**
 * The default list of stop words.
 */
const DefaultStopWords = [
    '',
    'a',
    'able',
    'about',
    'across',
    'after',
    'all',
    'almost',
    'also',
    'am',
    'among',
    'an',
    'and',
    'any',
    'are',
    'as',
    'at',
    'be',
    'because',
    'been',
    'but',
    'by',
    'can',
    'cannot',
    'could',
    'dear',
    'did',
    'do',
    'does',
    'either',
    'else',
    'ever',
    'every',
    'for',
    'from',
    'get',
    'got',
    'had',
    'has',
    'have',
    'he',
    'her',
    'hers',
    'him',
    'his',
    'how',
    'however',
    'i',
    'if',
    'in',
    'into',
    'is',
    'it',
    'its',
    'just',
    'least',
    'let',
    'like',
    'likely',
    'may',
    'me',
    'might',
    'most',
    'must',
    'my',
    'neither',
    'no',
    'nor',
    'not',
    'of',
    'off',
    'often',
    'on',
    'only',
    'or',
    'other',
    'our',
    'own',
    'rather',
    'said',
    'say',
    'says',
    'she',
    'should',
    'since',
    'so',
    'some',
    'than',
    'that',
    'the',
    'their',
    'them',
    'then',
    'there',
    'these',
    'they',
    'this',
    'tis',
    'to',
    'too',
    'twas',
    'us',
    'wants',
    'was',
    'we',
    'were',
    'what',
    'when',
    'where',
    'which',
    'while',
    'who',
    'whom',
    'why',
    'will',
    'with',
    'would',
    'yet',
    'you',
    'your'
];


/***/ }),

/***/ 2247:
/*!*****************************************!*\
  !*** ./src/app/lunr/filters/trimmer.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trimmer": () => (/* binding */ trimmer)
/* harmony export */ });
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */
/**
 * trimmer is a pipeline function for trimming non word
 * characters from the begining and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 */
function trimmer(token) {
    if (!token) {
        return undefined;
    }
    return token
        .replace(/^\W+/, '')
        .replace(/\W+$/, '');
}


/***/ }),

/***/ 6431:
/*!****************************************!*\
  !*** ./src/app/lunr/index-pipeline.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPipeline": () => (/* binding */ IndexPipeline)
/* harmony export */ });
/* harmony import */ var _filters_stemmer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters/stemmer */ 5432);
/* harmony import */ var _filters_stopword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters/stopword */ 3684);
/* harmony import */ var _filters_trimmer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters/trimmer */ 2247);
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */



/**
 * Pipelines maintain an ordered list of functions to be applied to
 * both documents tokens and query tokens.
 *
 * An instance of Index will contain a pipeline with a trimmer, a stop word filter,
 * an English stemmer. Extra functions can be added before or after either of these
 * functions or these default functions can be removed.
 *
 * The output of the functions in the pipeline will be passed to the next function
 * in the pipeline. To exclude a token from entering the index the function
 * should return undefined, the rest of the pipeline will not be called with
 * this token.
 */
class IndexPipeline {
    constructor(...queue) {
        /**
         * List of pipeline functions in order queue.
         */
        this._queue = [];
        if (queue.length == 0) {
            this._queue = [
                _filters_trimmer__WEBPACK_IMPORTED_MODULE_2__.trimmer,
                (0,_filters_stopword__WEBPACK_IMPORTED_MODULE_1__.defaultStopWordFilter)(),
                _filters_stemmer__WEBPACK_IMPORTED_MODULE_0__.stemmer
            ];
        }
        else {
            this._queue = queue;
        }
    }
    /**
     * The length of the pipeline.
     */
    get length() {
        return this._queue.length;
    }
    /**
     * Runs the current list of functions that registered in the pipeline against the
     * input tokens.
     */
    run(tokens) {
        const out = [];
        const tokenLength = tokens.length;
        const pipelineLength = this._queue.length;
        for (let i = 0; i < tokenLength; i++) {
            let token = tokens[i];
            for (let j = 0; j < pipelineLength; j++) {
                token = this._queue[j](token, i, tokens);
                if (!token) {
                    break;
                }
            }
            if (!!token) {
                out.push(token);
            }
        }
        return out;
    }
    ;
}


/***/ }),

/***/ 4945:
/*!*******************************!*\
  !*** ./src/app/lunr/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Index": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 7624);
/* harmony import */ var _document_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-store */ 2233);
/* harmony import */ var _inverted_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inverted-index */ 5966);
/* harmony import */ var _index_pipeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-pipeline */ 6431);
/* harmony import */ var _tokenizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokenizer */ 2822);
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */





/**
 * Create a new search index and configure it with the default, or passed pipeline function
 * and default search configuration. Once created, documents may be added and removed, but the base
 * configuration is immutable.
 *
 * By default, the pipeline functions contain a trimmer, a stop word filter, and an english language
 * stemmer. You may provide your own.
 *
 * Example:
 *  let idx = new Index('id');
 *  idx.addField('id');
 *  idx.addField('title');
 *  idx.addField('body');
 *
 *       //this.setRef('id'); // default ref is 'id'
 *
 *       this.pipeline.add(function () {
 *         // some custom pipeline function
 *       });
 *     });
 *
 *    idx.addDoc({
 *      id: 1,
 *      title: 'Oracle released database 12g',
 *      body: 'Yestaday, Oracle has released their latest database, named 12g, more robust. this product will increase Oracle profit.'
 *    });
 *
 *    idx.addDoc({
 *      id: 2,
 *      title: 'Oracle released annual profit report',
 *      body: 'Yestaday, Oracle has released their annual profit report of 2015, total profit is 12.5 Billion.'
 *    });
 *
 *    # simple search
 *    idx.search('oracle database');
 *
 *    # search with query-time boosting
 *    idx.search('oracle database', {fields: {title: {boost: 2}, body: {boost: 1}}});
 */
class Index extends EventTarget {
    /**
     * Create a new index. At minimum the field name for the identifier is required,
     */
    constructor(ref, config, ...filters) {
        super();
        this.config = config;
        this._fields = [];
        this.tokenizer = new _tokenizer__WEBPACK_IMPORTED_MODULE_4__.Tokenizer();
        /**
         * Key frequency inversion index by field.
         */
        this.fieldIndex = new Map();
        /**
         * Inverse document frequency cache.
         */
        this._idfCache = new Map();
        // Set up the doc store and fields.
        this.documentStore = new _document_store__WEBPACK_IMPORTED_MODULE_1__.DocumentStore(ref);
        this.addField(ref);
        // Set up the pipeline.
        this.pipeline = new _index_pipeline__WEBPACK_IMPORTED_MODULE_3__.IndexPipeline(...filters);
        this.addEventListener('add', () => this._idfCache.clear());
        this.addEventListener('remove', () => this._idfCache.clear());
        this.addEventListener('update', () => this._idfCache.clear());
    }
    /**
     * The field used to identify the document ID.
     */
    get idField() {
        return this.documentStore.idField;
    }
    /**
     * Adds a field to the list of fields that will be searchable within documents in the index.
     *
     * Remember that inner index is build based on field, which means each field has one inverted index.
     *
     * Fields should be added before any documents are added to the index, fields
     * that are added after documents are added to the index will only apply to new
     * documents added to the index.
     */
    addField(fieldName) {
        this._fields.push(fieldName);
        this.fieldIndex.set(fieldName, new _inverted_index__WEBPACK_IMPORTED_MODULE_2__.InvertedIndex());
        return this;
    }
    /**
     * Add a JSON format document to the index.
     *
     * This is the way new documents enter the index, this function will run the
     * fields from the document through the index's pipeline and then add it to
     * the index, it will then show up in search results.
     *
     * An 'add' event is emitted with the document that has been added and the index
     * the document has been added to. This event can be silenced by passing false
     * as the second argument to add.
     */
    addDoc(doc, emitEvent = true) {
        if (!doc) {
            return;
        }
        const docRef = doc[this.idField];
        this.documentStore.addDoc(doc);
        for (let field of this._fields) {
            const fieldValue = doc[field];
            const tokens = this.tokenizer.tokenize(fieldValue);
            const fieldTokens = this.pipeline.run(tokens);
            this.documentStore.setFieldLength(docRef, field, fieldTokens.length);
            let tokenCount = {};
            for (let token of fieldTokens) {
                if (token in tokenCount) {
                    tokenCount[token] += 1;
                }
                else {
                    tokenCount[token] = 1;
                }
            }
            for (let token in tokenCount) {
                let termFrequency = tokenCount[token];
                termFrequency = Math.sqrt(termFrequency);
                this.fieldIndex.get(field).addToken(token, { ref: docRef, tf: termFrequency });
            }
        }
        if (emitEvent) {
            this.dispatchEvent(new Event('add'));
        }
    }
    /**
     * Removes a document from the index by doc ref.
     *
     * To make sure documents no longer show up in search results they can be
     * removed from the index using this method.
     *
     * A 'remove' event is emitted with the document that has been removed and the index
     * the document has been removed from. This event can be silenced by passing false
     * as the second argument to remove.
     *
     * If user setting DocumentStore not storing the documents, then remove doc by docRef is not allowed.
     */
    removeDocByRef(docRef, emitEvent = true) {
        this.removeDoc(this.documentStore.getDoc(docRef), emitEvent);
    }
    /**
     * Removes a document from the index.
     * This remove operation could work even the original doc is not store in the DocumentStore.
     *
     * To make sure documents no longer show up in search results they can be
     * removed from the index using this method.
     *
     * A 'remove' event is emitted with the document that has been removed and the index
     * the document has been removed from. This event can be silenced by passing false
     * as the second argument to remove.
     */
    removeDoc(doc, emitEvent = true) {
        if (!doc) {
            return;
        }
        const docRef = doc[this.idField];
        if (!this.documentStore.hasDoc(docRef)) {
            return;
        }
        this.documentStore.removeDoc(docRef);
        for (let field of this._fields) {
            const tokens = this.tokenizer.tokenize(doc[field]);
            const fieldTokens = this.pipeline.run(tokens);
            for (let token of fieldTokens) {
                this.fieldIndex.get(field).removeToken(token, docRef);
            }
        }
        if (emitEvent) {
            this.dispatchEvent(new Event('remove'));
        }
    }
    /**
     * Updates a document in the index.
     *
     * When a document contained within the index gets updated, fields changed,
     * added or removed, to make sure it correctly matched against search queries,
     * it should be updated in the index.
     *
     * This method is just a wrapper around `remove` and `add`
     *
     * An 'update' event is emitted with the document that has been updated and the index.
     * This event can be silenced by passing false as the second argument to update. Only
     * an update event will be fired, the 'add' and 'remove' events of the underlying calls
     * are silenced.
     */
    updateDoc(doc, emitEvent = true) {
        // Get the current document from the store, so we can
        // delete the stored keys instead of the new ones.
        const ref = doc[this.idField];
        this.removeDocByRef(ref, false);
        this.addDoc(doc, false);
        if (emitEvent) {
            this.dispatchEvent(new Event('update'));
        }
    }
    /**
     * Get fields of current index instance
     */
    getFields() {
        return this._fields.slice();
    }
    /**
     * Searches the index using the passed query.
     * Queries should be a string, multiple words are allowed.
     *
     * If config is null, will search all fields by default, and lead to OR based query.
     * If config is specified, will search specified with query time boosting.
     *
     * All query tokens are passed through the same pipeline that document tokens
     * are passed through, so any language processing involved will be run on every
     * query term.
     *
     * Each query term is expanded, so that the term 'he' might be expanded to
     * 'hello' and 'help' if those terms were already included in the index.
     *
     * Matching documents are returned as an array of objects, each object contains
     * the matching document ref, as set for this index, and the similarity score
     * for this document against the query.
     */
    search(query, userConfig) {
        // Fast exit
        if (!query) {
            return [];
        }
        const config = new _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration(this.getFields(), userConfig || this.config).get();
        const queryTokens = this.pipeline.run(this.tokenizer.tokenize(query));
        const queryResults = new Map();
        for (let field in config.fields) {
            const fieldSearchResults = this.fieldSearch(queryTokens, field, config);
            const fieldBoost = config.fields[field].boost;
            for (let docRef of fieldSearchResults.keys()) {
                fieldSearchResults.set(docRef, fieldSearchResults.get(docRef) * fieldBoost);
            }
            for (let docRef of fieldSearchResults.keys()) {
                if (queryResults.has(docRef)) {
                    queryResults.set(docRef, queryResults.get(docRef) + fieldSearchResults.get(docRef));
                }
                else {
                    queryResults.set(docRef, fieldSearchResults.get(docRef));
                }
            }
        }
        let results = [];
        for (let docRef of queryResults.keys()) {
            results.push({ ref: docRef, score: queryResults.get(docRef) });
        }
        results.sort(function (a, b) {
            return b.score - a.score;
        });
        return results;
    }
    /**
     * Search for the query tokens in the specified document field
     * search queryTokens in specified field.
     */
    fieldSearch(queryTokens, fieldName, config) {
        const booleanType = config.fields[fieldName].bool;
        const expand = config.fields[fieldName].expand;
        const boost = config.fields[fieldName].boost;
        let scores = null;
        let docTokens = new Map();
        // Do nothing if the boost is 0
        if (boost === 0) {
            return new Map();
        }
        for (let token of queryTokens) {
            let tokens = [token];
            if (expand == true) {
                tokens = this.fieldIndex.get(fieldName).expandToken(token);
            }
            // Consider every query token in turn. If expanded, each query token
            // corresponds to a set of tokens, which is all tokens in the
            // index matching the pattern queryToken* .
            // For the set of tokens corresponding to a query token, find and score
            // all matching documents. Store those scores in queryTokenScores,
            // keyed by docRef.
            // Then, depending on the value of booleanType, combine the scores
            // for this query token with previous scores.  If booleanType is OR,
            // then merge the scores by summing into the accumulated total, adding
            // new document scores are required (effectively a union operator).
            // If booleanType is AND, accumulate scores only if the document
            // has previously been scored by another query token (an intersection
            // operation0.
            // Furthermore, since when booleanType is AND, additional
            // query tokens can't add new documents to the result set, use the
            // current document set to limit the processing of each new query
            // token for efficiency (i.e., incremental intersection).
            const queryTokenScores = new Map();
            for (let key of tokens) {
                let docs = this.fieldIndex.get(fieldName).getDocs(key);
                let idf = this.idf(key, fieldName);
                if (scores && booleanType == 'AND') {
                    // special case, we can rule out documents that have been
                    // already been filtered out because they weren't scored
                    // by previous query token passes.
                    let filteredDocs = new Map();
                    for (let docRef of scores.keys()) {
                        if (docs.has(docRef)) {
                            filteredDocs.set(docRef, docs.get(docRef));
                        }
                    }
                    docs = filteredDocs;
                }
                // only record appeared token for retrieved documents for the
                // original token, not for expanded token.
                // because for doing coordNorm for a retrieved document, coordNorm only care how many
                // query token appear in that document.
                // so expanded token should not be added into docTokens, if added, this will pollute the
                // coordNorm
                if (key == token) {
                    this.fieldSearchStats(docTokens, key, docs);
                }
                for (let docRef of docs.keys()) {
                    const tf = this.fieldIndex.get(fieldName).getTermFrequency(key, docRef);
                    const fieldLength = this.documentStore.getFieldLength(docRef, fieldName);
                    let fieldLengthNorm = 1;
                    if (fieldLength != 0) {
                        fieldLengthNorm = 1 / Math.sqrt(fieldLength);
                    }
                    let penalty = 1;
                    if (key != token) {
                        // currently I'm not sure if this penality is enough,
                        // need to do verification
                        penalty = (1 - (key.length - token.length) / key.length) * 0.15;
                    }
                    const score = tf * idf * fieldLengthNorm * penalty;
                    if (queryTokenScores.has(docRef)) {
                        queryTokenScores.set(docRef, queryTokenScores.get(docRef) + score);
                    }
                    else {
                        queryTokenScores.set(docRef, score);
                    }
                }
            }
            scores = this.mergeScores(scores, queryTokenScores, booleanType);
        }
        return this.coordNorm(scores, docTokens, queryTokens.length);
    }
    /**
     * Get the field access index for a particular field.
     */
    getFieldIndex(field) {
        return this.fieldIndex.get(field);
    }
    /**
     * Calculates the inverse document frequency for a token within the index of a field.
     */
    idf(term, field) {
        let cacheKey = '@' + field + '/' + term;
        if (this._idfCache.has(cacheKey)) {
            return this._idfCache.get(cacheKey);
        }
        const df = this.fieldIndex.get(field).getDocFreq(term);
        let idf = 1 + Math.log(this.documentStore.length / (df + 1));
        this._idfCache.set(cacheKey, idf);
        return idf;
    }
    /**
     * Clear the index of all documents and caches. Fields and refs are retained.
     */
    clear() {
        this.fieldIndex.clear();
        this._idfCache.clear();
        this.documentStore.clear();
    }
    /**
     * Merge the scores from one set of tokens into an accumulated score table.
     * Exact operation depends on the op parameter. If op is 'AND', then only the
     * intersection of the two score lists is retained. Otherwise, the union of
     * the two score lists is returned. For internal use only.
     */
    mergeScores(accumScores, scores, op) {
        if (!accumScores) {
            return scores;
        }
        if (op == 'AND') {
            let intersection = new Map();
            for (let docRef of scores.keys()) {
                if (accumScores.has(docRef)) {
                    intersection.set(docRef, accumScores.get(docRef) + scores.get(docRef));
                }
            }
            return intersection;
        }
        else {
            for (let docRef of scores.keys()) {
                if (accumScores.has(docRef)) {
                    accumScores.set(docRef, accumScores.get(docRef) + scores.get(docRef));
                }
                else {
                    accumScores.set(docRef, scores.get(docRef));
                }
            }
            return accumScores;
        }
    }
    /**
     * Record the occuring query token of retrieved doc specified by doc field.
     * Only for inner user.
     */
    fieldSearchStats(docTokens, token, docs) {
        for (let doc of docs.keys()) {
            if (docTokens.has(doc)) {
                docTokens.get(doc).push(token);
            }
            else {
                docTokens.set(doc, [token]);
            }
        }
    }
    /**
     * coord norm the score of a doc.
     * if a doc contain more query tokens, then the score will larger than the doc
     * contains less query tokens.
     */
    coordNorm(scores, docTokens, n) {
        for (let doc of scores.keys()) {
            if (!docTokens.has(doc)) {
                continue;
            }
            const tokens = docTokens.get(doc).length;
            scores.set(doc, scores.get(doc) * tokens / n);
        }
        return scores;
    }
}


/***/ }),

/***/ 5966:
/*!****************************************!*\
  !*** ./src/app/lunr/inverted-index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvertedIndex": () => (/* binding */ InvertedIndex)
/* harmony export */ });
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */
/**
 * Create a new node.
 */
function newNode() {
    const node = (new Map());
    node.docs = new Map();
    node.df = 0;
    return node;
}
/**
 * InvertedIndex is used for efficiently storing and lookup of documents that contain a given token.
 */
class InvertedIndex {
    constructor() {
        /**
         * Root reference for the index on this token.
         */
        this.root = newNode();
    }
    /**
     * Adds a {token: tokenInfo} pair to the inverted index.
     * If the token already exist, then update the tokenInfo.
     *
     * tokenInfo format: { ref: 1, tf: 2}
     * tokenInfor should contains the document's ref and the tf(token frequency) of that token in
     * the document.
     *
     * By default this function starts at the root of the current inverted index, however
     * it can start at any node of the inverted index if required.
     */
    addToken(token, tokenInfo, root = this.root) {
        let idx = 0;
        while (idx <= token.length - 1) {
            let key = token[idx];
            if (!root.has(key)) {
                root.set(key, newNode());
            }
            idx += 1;
            root = root.get(key);
        }
        if (!root.docs.has(tokenInfo.ref)) {
            // If it doesn't exist, add a new one.
            root.docs.set(tokenInfo.ref, tokenInfo);
            root.df += 1;
        }
        else {
            // if this doc already exist, then update tokenInfo
            root.docs.get(tokenInfo.ref).tf = tokenInfo.tf;
        }
    }
    ;
    /**
     * Checks whether a token is in this InvertedIndex.
     */
    hasToken(token) {
        if (!token) {
            return false;
        }
        let node = this.root;
        for (let i = 0; i < token.length; i++) {
            const key = token.charAt(i);
            if (!node.has(key)) {
                return false;
            }
            node = node.get(key);
        }
        return true;
    }
    ;
    /**
     * Retrieve a node from the inverted index for a given token.
     * If token not found in this InvertedIndex, return null.
     */
    getNode(token) {
        if (!token) {
            return null;
        }
        let node = this.root;
        for (let i = 0; i < token.length; i++) {
            const key = token.charAt(i);
            if (!node.has(key)) {
                return undefined;
            }
            node = node.get(key);
        }
        return node;
    }
    /**
     * Retrieve the documents of a given token.
     * If token not found, return {}.
     */
    getDocs(token) {
        const node = this.getNode(token);
        if (node == null) {
            return new Map();
        }
        return node.docs;
    }
    /**
     * Retrieve term frequency of given token in given docRef.
     * If token or docRef not found, return 0.
     */
    getTermFrequency(token, docRef) {
        const doc = this.getDocs(token).get(docRef);
        if (doc === undefined) {
            return 0;
        }
        return doc.tf;
    }
    /**
     * Retrieve the document frequency of given token.
     * If token not found, return 0.
     */
    getDocFreq(token) {
        const node = this.getNode(token);
        if (node == undefined) {
            return 0;
        }
        return node.df;
    }
    /**
     * Remove the document identified by document's ref from the token in the inverted index.
     */
    removeToken(token, docRef) {
        let node = this.getNode(token);
        if (node == undefined) {
            return;
        }
        if (node.docs.has(docRef)) {
            node.docs.delete(docRef);
            node.df -= 1;
        }
    }
    /**
     * Find all the possible suffixes of given token using tokens currently
     * in the inverted index. If token not found, return empty Array.
     */
    expandToken(token, root) {
        let memo = [];
        if (!root) {
            root = this.getNode(token);
            if (root == undefined) {
                return memo;
            }
        }
        if (root.df > 0) {
            memo.push(token);
        }
        for (let key of root.keys()) {
            memo.push(...this.expandToken(token + key, root.get(key)));
        }
        return memo;
    }
}


/***/ }),

/***/ 2822:
/*!***********************************!*\
  !*** ./src/app/lunr/tokenizer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tokenizer": () => (/* binding */ Tokenizer)
/* harmony export */ });
/*
 * Copyright (c) 2022 dataplay.io, all rights reserved.
 */
/**
 * Default string seperator.
 */
const defaultSeperator = /[\s\-]+/;
/**
 * A class for splitting a string into tokens. Currently English is supported as default.
 * Uses `public seperator` to split strings, you could change
 * the value of this property to set how you want strings are split into tokens.
 * IMPORTANT: use public seperator carefully, if you are not familiar with
 * text process, then you'd better not change it.
 */
class Tokenizer {
    /**
     * The separator used to split a string into tokens. Override this property to change the behaviour of
     * `tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
     */
    constructor(separator = defaultSeperator) {
        this.separator = separator;
    }
    /**
     * Tokenize a string into its components.
     */
    tokenize(...str) {
        if (!str) {
            return [];
        }
        return str
            .map((token) => this.toString(token))
            // Filter out empty values
            .filter((token) => !!token)
            // Stringify and lowercase the value
            .map((token) => token.trim().toLowerCase())
            // Concat all results.
            .reduce((coll, token) => [
            ...coll,
            ...token.split(this.separator)
        ], []);
    }
    /**
     * Convert an object to string.
     *
     * In the case of `null` and `undefined` the function returns
     * an empty string, in all other cases the result of calling
     * `toString` on the passed object is returned.
     */
    toString(obj) {
        if (obj === void 0 || obj === null) {
            return '';
        }
        return obj.toString();
    }
}


/***/ }),

/***/ 9936:
/*!************************************************!*\
  !*** ./src/app/pipe/contact-icon-name.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactIconNamePipe": () => (/* binding */ ContactIconNamePipe)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 2186);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ContactIconNamePipe {
    /**
     * Transform a contact item type into the appropriate font awesome icon.
     */
    transform(value) {
        switch (value.type) {
            case 'email':
                return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faEnvelope;
            case 'twitter':
                return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faTwitter;
            case 'wordpress':
                return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faWordpress;
            case 'linkedin':
                return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faLinkedin;
            case 'github':
                return _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faGithub;
        }
    }
}
ContactIconNamePipe.ɵfac = function ContactIconNamePipe_Factory(t) { return new (t || ContactIconNamePipe)(); };
ContactIconNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "contactIconName", type: ContactIconNamePipe, pure: true });


/***/ }),

/***/ 5412:
/*!*******************************************!*\
  !*** ./src/app/pipe/contact-link.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactLinkPipe": () => (/* binding */ ContactLinkPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ContactLinkPipe {
    /**
     * Transform a contact item into the appropriate HREF link.
     */
    transform(value) {
        switch (value.type) {
            case 'email':
                return `mailto:${value.value}`;
            default:
                return value.value;
        }
    }
}
ContactLinkPipe.ɵfac = function ContactLinkPipe_Factory(t) { return new (t || ContactLinkPipe)(); };
ContactLinkPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "contactLink", type: ContactLinkPipe, pure: true });


/***/ }),

/***/ 2337:
/*!********************************************************************!*\
  !*** ./src/app/presentation-event/presentation-event.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentationEventComponent": () => (/* binding */ PresentationEventComponent)
/* harmony export */ });
/* harmony import */ var _abstract_event_renderer_abstract_event_renderer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-event-renderer/abstract-event-renderer.component */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _event_title_event_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-title/event-title.component */ 7994);
/* harmony import */ var _event_tags_event_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-tags/event-tags.component */ 7186);




class PresentationEventComponent extends _abstract_event_renderer_abstract_event_renderer_component__WEBPACK_IMPORTED_MODULE_0__.AbstractEventRendererComponent {
}
PresentationEventComponent.ɵfac = /*@__PURE__*/ function () { let ɵPresentationEventComponent_BaseFactory; return function PresentationEventComponent_Factory(t) { return (ɵPresentationEventComponent_BaseFactory || (ɵPresentationEventComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](PresentationEventComponent)))(t || PresentationEventComponent); }; }();
PresentationEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PresentationEventComponent, selectors: [["cv-presentation-event"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 6, consts: [[3, "title", "date"], [3, "tags"]], template: function PresentationEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "cv-event-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "cv-event-tags", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Presentation: " + ctx.event.title)("date", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", ctx.event.event, " - ", ctx.event.location.city, ", ", ctx.event.location.country, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tags", ctx.event.tags);
    } }, directives: [_event_title_event_title_component__WEBPACK_IMPORTED_MODULE_1__.EventTitleComponent, _event_tags_event_tags_component__WEBPACK_IMPORTED_MODULE_2__.EventTagsComponent], styles: ["p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.4rem;\n}\np[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\np[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3R5cG9ncmFwaHkuc2NzcyIsInByZXNlbnRhdGlvbi1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0FGO0FEQ0U7RUFDRSxhQUFBO0FDQ0o7QURDRTtFQUNFLGtCQUFBO0FDQ0oiLCJmaWxlIjoicHJlc2VudGF0aW9uLWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40cmVtO1xuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgfVxufVxuIiwicCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcbn1cbnA6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5wOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn0iXX0= */"] });


/***/ }),

/***/ 6363:
/*!**********************************************************!*\
  !*** ./src/app/project-event/project-event.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectEventComponent": () => (/* binding */ ProjectEventComponent)
/* harmony export */ });
/* harmony import */ var _abstract_event_renderer_abstract_event_renderer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-event-renderer/abstract-event-renderer.component */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _event_title_event_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event-title/event-title.component */ 7994);
/* harmony import */ var _event_tags_event_tags_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-tags/event-tags.component */ 7186);




class ProjectEventComponent extends _abstract_event_renderer_abstract_event_renderer_component__WEBPACK_IMPORTED_MODULE_0__.AbstractEventRendererComponent {
}
ProjectEventComponent.ɵfac = /*@__PURE__*/ function () { let ɵProjectEventComponent_BaseFactory; return function ProjectEventComponent_Factory(t) { return (ɵProjectEventComponent_BaseFactory || (ɵProjectEventComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ProjectEventComponent)))(t || ProjectEventComponent); }; }();
ProjectEventComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProjectEventComponent, selectors: [["cv-project-event"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 4, consts: [[3, "title", "date"], [3, "tags"]], template: function ProjectEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "cv-event-title", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "cv-event-tags", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Project: " + ctx.event.title)("date", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.event.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("tags", ctx.event.tags);
    } }, directives: [_event_title_event_title_component__WEBPACK_IMPORTED_MODULE_1__.EventTitleComponent, _event_tags_event_tags_component__WEBPACK_IMPORTED_MODULE_2__.EventTagsComponent], styles: ["p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.4rem;\n}\np[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\np[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3R5cG9ncmFwaHkuc2NzcyIsInByb2plY3QtZXZlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNBRjtBRENFO0VBQ0UsYUFBQTtBQ0NKO0FEQ0U7RUFDRSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3QtZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjRyZW07XG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG59XG4iLCJwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40cmVtO1xufVxucDpmaXJzdC1vZi10eXBlIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbnA6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);



/**
 * The data service.
 */
class DataService {
    constructor(http) {
        const profileUrl = `data/profile.json`;
        const eventsUrl = `data/events.json`;
        this.profile$ = http.get(profileUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)(1));
        this.events$ = http.get(eventsUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((result) => result.results.sort((a, b) => {
            const aDate = this.chooseDate(a);
            const bDate = this.chooseDate(b);
            if (aDate === bDate) {
                return this.typeRank(b.type) - this.typeRank(a.type);
            }
            return aDate > bDate ? -1 : 1;
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)(1));
    }
    typeRank(type) {
        switch (type) {
            case 'presentation':
                return -1;
            case 'project':
                return 1;
            case 'job_change':
                return 2;
            default:
                console.log(type);
                return 0;
        }
    }
    chooseDate(e) {
        switch (e.type) {
            case 'education':
            case 'presentation':
                return this.buildDate(e.date, 'begin').getTime();
            case 'job_change':
            case 'project':
                return this.buildDate(e.date, 'end').getTime();
            default:
                return this.buildDate(e.date, 'begin').getTime();
        }
    }
    buildDate(date, key) {
        let dateString;
        if (typeof date === 'string') {
            dateString = date;
        }
        else {
            dateString = date[key];
        }
        if (dateString === 'current') {
            return new Date();
        }
        return new Date(dateString);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
DataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8709:
/*!************************************************!*\
  !*** ./src/app/services/tag-search.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagSearchService": () => (/* binding */ TagSearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9045);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _lunr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lunr */ 4945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 2468);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 2816);






class TagSearchService {
    constructor(data, activatedRoute, router) {
        this.router = router;
        this.tagFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.index = new _lunr__WEBPACK_IMPORTED_MODULE_0__.Index('tag');
        this.index.addField('tag');
        this.selectedTags$ = activatedRoute.queryParams
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.pluck)('tag'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((t) => t ? t.split(',') : []));
        this.validTags$ = data.events$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((evts) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(...evts)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((evt) => evt.tags), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.reduce)((acc, value) => {
            value.forEach((v) => acc.add(v));
            return acc;
        }, new Set()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tagSet) => Array.from(tagSet)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
        this.validTags$.subscribe((tags) => tags.forEach((tag) => this.index.addDoc({ tag })));
        this.filteredTags$ = this.tagFilter$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((str) => {
            if (!str || str.length === 0) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.index.search(str, { fields: { tag: { expand: true } } }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((searchResults) => {
                return searchResults.map((result) => this.index.documentStore.getDoc(result.ref));
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.withLatestFrom)(this.selectedTags$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([filtered, selected]) => filtered.filter((tag) => selected.indexOf(tag.tag) === -1)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tags) => tags.length === 0 ? null : tags), 
        // eslint-disable-next-line import/no-deprecated
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
    }
    /**
     * Add a tag to the selection criteria.
     */
    addTag(newTag) {
        this.selectedTags$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1))
            .subscribe({
            next: (tag) => {
                this.navigateTo([...tag, newTag]);
            }
        });
    }
    /**
     * Clear all the tags.
     */
    clear() {
        this.navigateTo([]);
    }
    /**
     * Remove the last tag.
     */
    removeLast() {
        this.selectedTags$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1))
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
    removeTag(oldTag) {
        this.selectedTags$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((t) => {
            const idx = t.indexOf(oldTag);
            if (idx > -1) {
                t.splice(idx, 1);
            }
            return t;
        })).subscribe({
            next: (tag) => this.navigateTo(tag)
        });
    }
    /**
     * Central router. Might as well.
     */
    navigateTo(tags) {
        const tag = tags.length > 0 ? tags.join(',') : null;
        this.router.navigate(['/'], { queryParams: { tag } });
    }
}
TagSearchService.ɵfac = function TagSearchService_Factory(t) { return new (t || TagSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_1__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router)); };
TagSearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({ token: TagSearchService, factory: TagSearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6000:
/*!**************************************************!*\
  !*** ./src/app/skill-box/skill-box.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillBoxComponent": () => (/* binding */ SkillBoxComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9045);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/data.service */ 2468);
/* harmony import */ var _services_tag_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tag-search.service */ 8709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);






const _c0 = function (a0, a1) { return { width: a0, "margin-right": a1 }; };
function SkillBoxComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
} if (rf & 2) {
    const range_r3 = ctx.ngIf;
    const skill_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate3"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](1, 4, skill_r1.startDate, "MMM `yy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 7, skill_r1.endDate, "MMM `yy"), ": ", ctx_r2.durationLabel(skill_r1), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](10, _c0, skill_r1.duration / range_r3 * 100 + "%", skill_r1.lastUsed / range_r3 * 100 + "%"));
} }
function SkillBoxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SkillBoxComponent_div_0_div_4_Template, 3, 13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 2, ctx_r0.dateRange$));
} }
const yearInMillis = 365 * 24 * 60 * 60 * 1000;
const monthInMillis = yearInMillis / 12;
class SkillBoxComponent {
    constructor(dataService, tags) {
        this.skills$ = dataService.events$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)((events) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(...events)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.concatMap)((event) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(...event.tags.map((name) => ({
            name,
            startDate: typeof event.date === 'string' ? event.date : event.date.begin,
            endDate: typeof event.date === 'string' ? event.date : event.date.end
        })))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((skill) => {
            const startDate = new Date(skill.startDate);
            const endDate = skill.endDate === 'current' ? new Date() : new Date(skill.endDate);
            return { name: skill.name, startDate, endDate };
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.reduce)((acc, val) => {
            if (!acc.hasOwnProperty(val.name)) {
                acc[val.name] = { startDate: val.startDate, endDate: val.endDate };
            }
            else {
                const current = acc[val.name];
                current.startDate = current.startDate > val.startDate ? val.startDate : current.startDate;
                current.endDate = current.endDate < val.endDate ? val.endDate : current.endDate;
            }
            acc[val.name].duration = acc[val.name].endDate.getTime() - acc[val.name].startDate.getTime();
            acc[val.name].lastUsed = new Date().getTime() - acc[val.name].endDate.getTime();
            return acc;
        }, {}), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((coll) => {
            const skills = Object.keys(coll).map((key) => ({
                name: key,
                startDate: coll[key].startDate,
                endDate: coll[key].endDate,
                duration: coll[key].duration,
                lastUsed: coll[key].lastUsed
            }));
            return skills.sort((a, b) => {
                if (a.endDate > b.endDate) {
                    return -1;
                }
                if (a.endDate < b.endDate) {
                    return 0;
                }
                return a.duration === b.duration ? 0 : a.duration < b.duration ? 1 : -1;
            });
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
        this.filteredSkills$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.skills$, tags.selectedTags$, dataService.profile$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([skills, selectedTags, profile]) => {
            let filteringSkills = profile.featuredSkills;
            if (selectedTags.indexOf('Everything') === -1) {
                filteringSkills = selectedTags;
            }
            if (filteringSkills.length === 0) {
                return [];
            }
            return skills.filter((skill) => filteringSkills.indexOf(skill.name) > -1);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
        this.startDate$ = this.filteredSkills$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((skills) => skills
            .map((skill) => skill.startDate)
            .sort((a, b) => a > b ? 1 : a < b ? -1 : 0)[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((date) => date ? date.getTime() : 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
        this.endDate$ = this.skills$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((skills) => skills
            .map((skill) => skill.endDate)
            .sort((a, b) => a > b ? -1 : a < b ? 1 : 0)[0]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((date) => date ? date.getTime() : 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
        this.dateRange$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.startDate$, this.endDate$])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([start, end]) => end - start));
    }
    /**
     * A millisecond duration, expressed as a string in months/years.
     */
    durationLabel(skill) {
        const year = Math.floor(skill.duration / yearInMillis);
        const month = Math.floor((skill.duration % yearInMillis) / monthInMillis);
        const yearLabel = year === 0 ? '' : year === 1 ? '1 year' : `${year} years`;
        const monthLabel = month === 0 ? '' : month === 1 ? '1 month' : `${month} months`;
        const parts = [];
        if (yearLabel) {
            parts.push(yearLabel);
        }
        if (monthLabel) {
            parts.push(monthLabel);
        }
        return parts.join(', ');
    }
}
SkillBoxComponent.ɵfac = function SkillBoxComponent_Factory(t) { return new (t || SkillBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_0__.DataService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_tag_search_service__WEBPACK_IMPORTED_MODULE_1__.TagSearchService)); };
SkillBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SkillBoxComponent, selectors: [["cv-skill-box"]], decls: 14, vars: 15, consts: [["class", "skill", 4, "ngFor", "ngForOf"], [1, "skill"], [1, "skill-label"], [1, "skill-footer"], [1, "skill-date"], [1, "skill-bar"], ["class", "skill-bar-duration", 3, "title", "ngStyle", 4, "ngIf"], [1, "skill-bar-duration", 3, "title", "ngStyle"]], template: function SkillBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, SkillBoxComponent_div_0_Template, 6, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 3, ctx.filteredSkills$));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, ctx.startDate$), "MMM `yy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 13, ctx.endDate$), "MMM `yy"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: ["@media print {\n  [_nghost-%COMP%] {\n    -webkit-print-color-adjust: exact;\n  }\n}\n.skill[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-items: center;\n  overflow: hidden;\n}\n.skill[_ngcontent-%COMP%]   .skill-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  width: 20%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.skill[_ngcontent-%COMP%]   .skill-bar[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  flex: 1 0 auto;\n  height: 8px;\n  border-radius: 4px;\n  background: white;\n  display: flex;\n  flex-direction: row-reverse;\n  overflow: hidden;\n}\n.skill[_ngcontent-%COMP%]   .skill-bar[_ngcontent-%COMP%]   .skill-bar-duration[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: lightgrey;\n  height: 100%;\n}\n.skill[_ngcontent-%COMP%]   .skill-footer[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-items: stretch;\n  font-size: 0.8em;\n  color: lightgrey;\n}\n.skill[_ngcontent-%COMP%]   .skill-footer[_ngcontent-%COMP%]   .skill-date[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  width: 50%;\n}\n.skill[_ngcontent-%COMP%]   .skill-footer[_ngcontent-%COMP%]   .skill-date[_ngcontent-%COMP%]:last-of-type {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFO0lBQ0UsaUNBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUU7RUFDRSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBRko7QUFJSTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFGTjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEo7QUFPSTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBTE47QUFPTTtFQUNFLGlCQUFBO0FBTFIiLCJmaWxlIjoic2tpbGwtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgcHJpbnQge1xuICA6aG9zdCB7XG4gICAgLXdlYmtpdC1wcmludC1jb2xvci1hZGp1c3Q6IGV4YWN0O1xuICB9XG59XG5cbi5za2lsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuc2tpbGwtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgd2lkdGg6IDIwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLnNraWxsLWJhciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIGhlaWdodDogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLnNraWxsLWJhci1kdXJhdGlvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnNraWxsLWZvb3RlciB7XG4gICAgZmxleDogMSAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG5cbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcblxuICAgIC5za2lsbC1kYXRlIHtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIFxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5151:
/*!****************************************************!*\
  !*** ./src/app/tag-search/tag-search.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagSearchComponent": () => (/* binding */ TagSearchComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 655);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_tag_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/tag-search.service */ 8709);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 9397);






const _c0 = ["searchInput"];
function TagSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "fa-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagSearchComponent_div_0_Template_fa_icon_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const tag_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.removeTag(tag_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r0.faTimes);
} }
function TagSearchComponent_ul_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagSearchComponent_ul_5_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const tag_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.addTag(tag_r8.tag); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r8.tag);
} }
function TagSearchComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagSearchComponent_ul_5_li_1_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tags_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", tags_r6);
} }
class TagSearchComponent {
    /**
     * All the things.
     */
    constructor(service) {
        this.service = service;
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.faTimes;
        this.placeholder$ = service.selectedTags$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((tags) => tags.length > 0 ? '' : this.placeholder));
    }
    /**
     * The tag string.
     */
    removeTag(tag) {
        this.service.removeTag(tag);
    }
    /**
     * Add a tag.
     */
    addTag(tag) {
        this.service.addTag(tag);
        this.service.tagFilter$.next('');
        this.searchInput.nativeElement.value = '';
    }
    /**
     * Remove last.
     */
    removeLast(event) {
        if (event.key === 'Backspace') {
            if (event.target.value === '') {
                this.service.removeLast();
            }
        }
    }
    /**
     * Carriage return handler.
     */
    handleEnter() {
        this.service.filteredTags$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((tags) => {
            if (tags && tags.length > 0) {
                this.addTag(tags[0].tag);
            }
        });
    }
}
TagSearchComponent.ɵfac = function TagSearchComponent_Factory(t) { return new (t || TagSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tag_search_service__WEBPACK_IMPORTED_MODULE_0__.TagSearchService)); };
TagSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagSearchComponent, selectors: [["cv-tag-search"]], viewQuery: function TagSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, inputs: { placeholder: "placeholder" }, decls: 7, vars: 9, consts: [["class", "tag", 4, "ngFor", "ngForOf"], ["type", "text", "autofocus", "", 3, "placeholder", "input", "keydown.enter", "keydown"], ["searchInput", ""], ["class", "tag-search-options", 4, "ngIf"], [1, "tag"], [3, "icon", "click"], [1, "tag-search-options"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function TagSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TagSearchComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TagSearchComponent_Template_input_input_2_listener($event) { return ctx.service.tagFilter$.next($event.target.value); })("keydown.enter", function TagSearchComponent_Template_input_keydown_enter_2_listener() { return ctx.handleEnter(); })("keydown", function TagSearchComponent_Template_input_keydown_2_listener($event) { return ctx.removeLast($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TagSearchComponent_ul_5_Template, 2, 1, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, ctx.service.selectedTags$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, ctx.placeholder$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, ctx.service.filteredTags$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FaIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  box-shadow: none;\n  box-sizing: border-box;\n  border-bottom: 1px solid #BBBBBB;\n  text-align: left;\n  padding: 0 3px 2px 3px;\n  line-height: 1.3em;\n  cursor: text;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  font-size: 0.8em;\n}\n.focused[_nghost-%COMP%] {\n  border: 1px solid #33C3F0;\n}\n[_nghost-%COMP%]   div.tag[_ngcontent-%COMP%] {\n  border: 1px solid #BBBBBB;\n  background-color: #DDDDDD;\n  padding: 3px 5px 1px 5px;\n  border-radius: 3px;\n  margin-right: 3px;\n  margin-top: 2px;\n}\n[_nghost-%COMP%]   div.tag[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   div.tag[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  border: none;\n  height: 23px;\n  background-color: transparent;\n  margin-bottom: 0;\n  min-width: 50px;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  text-align: center;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  text-align: center;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  text-align: center;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: none;\n}\n[_nghost-%COMP%]   .tag-search-options[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  border: 1px solid #BBBBBB;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  list-style: none;\n  border-radius: 3px;\n  background-color: white;\n  box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.1);\n  padding: 0;\n}\n[_nghost-%COMP%]   .tag-search-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background-color: white;\n  font-size: 1em;\n  padding: 4px 6px;\n  margin: 0;\n  border-bottom: 1px solid white;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .tag-search-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n[_nghost-%COMP%]   .tag-search-options[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #EEEEEE;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZy1zZWFyY2guY29tcG9uZW50LnNjc3MiLCIuLi8uLi92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBRUEsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UseUJBQUE7QUFGSjtBQUtFO0VBQ0UseUJBQUE7RUFDQSx5QkNyQlc7RURzQlgsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUhKO0FBS0k7RUFDRSxlQUFBO0FBSE47QUFNSTtFQUNFLGVBQUE7QUFKTjtBQVFFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFOSjtBQVFJO0VBQ0Usa0JBQUE7QUFOTjtBQVNJO0VBQXNCLGdCQUFBO0VBQ3BCLGtCQUFBO0FBTk47QUFTSTtFQUNFLGtCQUFBO0FBUE47QUFVSTtFQUNFLFlBQUE7QUFSTjtBQWFFO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtFQUNBLFVBQUE7QUFYSjtBQWFJO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBWE47QUFhTTtFQUNFLG1CQUFBO0FBWFI7QUFjTTtFQUNFLHlCQUFBO0FBWlIiLCJmaWxlIjoidGFnLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3ZhcmlhYmxlcyc7XG46aG9zdCB7XG4gIC8vYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXlfbGlnaHQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDAgM3B4IDJweCAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgY3Vyc29yOiB0ZXh0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBmb250LXNpemU6IC44ZW07XG5cbiAgJi5mb2N1c2VkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzNDM0YwO1xuICB9XG5cbiAgZGl2LnRhZyB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXlfbGlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXlfbGlnaHRlcjtcbiAgICBwYWRkaW5nOiAzcHggNXB4IDFweCA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcblxuICAgIGZhLWljb24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG5cbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHsgLyogRmlyZWZveCAxOSsgKi9cbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICB9XG5cblxuICAudGFnLXNlYXJjaC1vcHRpb25zIHtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGdyZXlfbGlnaHQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDJweCByZ2JhKDAsIDAsIDAsIC4xKTtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgbGkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiXG4kZ3JleV9saWdodGVyOiAjREREREREO1xuJGdyZXlfbGlnaHQ6ICNCQkJCQkI7XG4kZ3JleTogIzk5OTk5OTtcblxuQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93Omluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzppbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICBib3gtc2hhZG93Omluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map