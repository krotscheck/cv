/**
 * User profile data item.
 */
import { ProfileContact } from './profile-contact';
import { ProfileHeader } from './profile-header';

export interface Profile {

  /**
   * User name.
   */
  name: string;

  /**
   * Byline
   */
  byline: string;

  /**
   * Resume summary, used in header.
   */
  summary: string;

  /**
   * Contact methods.
   */
  contact: ProfileContact[];

  /**
   * List of featured skills.
   */
  featuredSkills: string[];

  /**
   * Resume header, prioritized based on search tags.
   */
  about: ProfileHeader[];
}
