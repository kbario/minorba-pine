import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  public readonly contactInfo = [
    { method: 'email', key: 'minorba1@bigpond.com' },
    { method: 'phone', key: '08 9853 2138' },
    { method: 'phone', key: 'minorba1@bigpond.com' },
    { method: 'phone', key: 'minorba1@bigpond.com' },
  ];

  public readonly openingHours = [
    { day: 'Monday', open: '8am', close: '5pm' },
    { day: 'Tuesday', open: '8am', close: '5pm' },
    { day: 'Wednesday', open: '8am', close: '5pm' },
    { day: 'Thursday', open: '8am', close: '5pm' },
    { day: 'Friday', open: '8am', close: '3pm' },
    { day: 'Saturday', open: null, close: null },
    { day: 'Sunday', open: null, close: null },
    { day: 'Public Holidays', open: null, close: null },
  ];
}
