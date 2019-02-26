import { Pipe, PipeTransform } from '@angular/core';
import { ProfileContact } from '../model/profile-contact';

@Pipe({
  name: 'contactLink'
})
export class ContactLinkPipe implements PipeTransform {

  /**
   * Transform a contact item into the appropriate HREF link.
   */
  public transform(value: ProfileContact): any {
    switch (value.type) {
      case 'email':
        return `mailto:${value.value}`;
      default:
        return value.value;
    }
  }
}
