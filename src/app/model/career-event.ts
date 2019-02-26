/**
 * Basic event type.
 */
export interface CareerEvent {

  date: string | {
    begin: string,
    end: string
  };

  type: string;

  title: string;

  institution?: string;

  event?: string;

  description: string;

  duration: {
    begin: string,
    end: string | 'current'
  };

  location: {
    city: string;
    region: string;
    country: string;
  };

  tags: string[];

  employer: string;
}

/**
 * A successful project.
 */
export interface ProjectCareerEvent extends CareerEvent {
  type: 'project';

  url?: string;
}

/**
 * A job change.
 */
export interface JobChangeCareerEvent extends CareerEvent {
  type: 'job_change';

  reason: 'hired' | 'dismissed' | 'laid-off' | 'departed' | 'acquisition' | 'promotion';

}

/**
 * A formal presentation.
 */
export interface PresentationCareerEvent extends CareerEvent {
  type: 'presentation';

  event: 'string';

  url?: string;

}

/**
 * Education.
 */
export interface EducationCareerEvent extends CareerEvent {
  type: 'presentation';

  institution: 'string';

  school: 'string';

  url?: string;
}

/**
 * An award.
 */
export interface AwardCareerEvent extends CareerEvent {
  type: 'award';

  institution: 'string';

  url?: string;
}
