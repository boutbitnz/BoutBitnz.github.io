import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

const animationTemplate = `
  <div style="">
    <button (click)="toggle()">Show / Hide Items</button>
    <div [@listAnimation]="items.length"
        (@listAnimation.start)="logAnimation($event)"
        (@listAnimation.done)="logAnimation($event)">
      <div *ngFor="let item of items">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
  `;

const animationMenu = trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ]);


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'menu',
  template: animationTemplate,
  // styles: [''],
  // List Animation | https://stackblitz.com/edit/angular-list-animations?file=app%2Fapp.component.ts
  animations: [ animationMenu ],

})
export class AnimationMenuComponent implements OnInit {
  title = 'Animation Menu';
  data  = 'Animation Menu';
  items = [];

  logAnimation(_event) {
    console.log(_event);
  }
  showItems() {
    [0, 1, 2, 3, 4, 6, 7, 8, 9, 10].map((i) => {
      this.items.push('User Number - ' + i);
    });
  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }

  constructor() { }

  ngOnInit() {
  }

}
