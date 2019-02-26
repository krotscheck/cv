import { Pipe, PipeTransform } from '@angular/core';
import { ProfileContact } from '../model/profile-contact';

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
        return ['fas', 'envelope'];
      default:
        return ['fab', value.type];
    }
  }
}
