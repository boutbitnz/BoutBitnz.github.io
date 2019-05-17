import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'about',
  template: `<p> {{ title }} Works!</p>`,
  // styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = 'About';
  constructor() { }

  ngOnInit() {
  }

}
