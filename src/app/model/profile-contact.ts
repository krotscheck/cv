/**
 * Contact information.
 */
export interface ProfileContact {

  /**
   * Contact type.
   */
  type: 'email' | 'wordpress' | 'twitter' | 'linkedin' | 'github';

  /**
   * Value type.
   */
  value: string;
}
