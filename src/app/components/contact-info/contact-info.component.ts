import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact',
  template: `<p> {{ title }} Works!</p>`,
  // styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  title = 'Contact Info';
  constructor() { }

  ngOnInit() {
  }

}
