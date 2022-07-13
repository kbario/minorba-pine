import { Component, OnInit } from '@angular/core';

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
  public readonly displayedColumns = [];
}
