import { Pipe, PipeTransform } from '@angular/core';
import { ProfileContact } from '../model/profile-contact';

import { faGithub, faLinkedin, faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'contactIconName'
})
export class ContactIconNamePipe implements PipeTransform {

  /**
   * Transform a contact item type into the appropriate font awesome icon.
   */
  public transform(value: ProfileContact): any {
    switch (value.type) {
      case 'email':
        return faEnvelope;
      case 'twitter':
        return faTwitter;
      case 'wordpress':
        return faWordpress;
      case 'linkedin':
        return faLinkedin;
      case 'github':
        return faGithub;
    }
  }
}
