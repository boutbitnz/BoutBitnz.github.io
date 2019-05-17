import { Component, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';
// import { trigger, transition, style, animate, query, stagger } from '@angular/animations';


const wrapper =
`
  <div class="wrapper" style="height: 100vh;">
    <div class="container-fluid">
      <div class="row">

      <mnav></mnav>
      <h2 id="customerDetail"><small (click)="getCustomerDetails()">Get customer details</small></h2>
      <app-footer></app-footer>

      </div>
    </div>
    <router-outlet></router-outlet>
  </div>
  `;

const wrapperStyles = `
    h2#customerDetail {position: absolute; bottom: 5em;}
    `;

// const animationMenu = trigger('listAnimation', [
//   transition('* => *', [
//     query(':leave', [
//       stagger(100, [
//         animate('0.5s', style({ opacity: 0 }))
//       ])
//     ], { optional: true }),
//     query(':enter', [
//       style({ opacity: 0 }),
//       stagger(100, [
//         animate('0.5s', style({ opacity: 1 }))
//       ])
//     ], { optional: true })
//   ])
// ]);

// <div style="position: absolute; top: 5em; right: 15em;">
//   <button (click)="toggle()">Show / Hide Items</button>
//   <div [@listAnimation]="items.length"
//       (w.start)="logAnimation($event)"
//       (@listAnimation.done)="logAnimation($event)">
//     <div *ngFor="let item of items">
//       <div>{{ item }}</div>
//     </div>
//   </div>
// </div>

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'boutbitnz',
  template: wrapper,
  styles: [ wrapperStyles],

  // List Animation | https://stackblitz.com/edit/angular-list-animations?file=app%2Fapp.component.ts
  // animations: [ animationMenu ],
  // templateUrl: './app.component.html',
  // templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {

  title = 'Boutbitnz Inc';
  // items = [];

  // Angular-Interceptor | https://github.com/vigneshsithirai/Angular-Interceptor/blob/master/src/app/app.component.ts
  constructor(public loginService: LoginService) {
    this.loginService.login({}).subscribe(data => {
      console.log(data);
    });
  }

  getCustomerDetails() {
    this.loginService.getCustomerDetails().subscribe((data) => {
      console.log('----->>>', data);
    });
  }

  // List Animation | https://stackblitz.com/edit/angular-list-animations?file=app%2Fapp.component.ts
  // items = [];

  // logAnimation(_event) {
  //   console.log(_event);
  // }
  // showItems() {
  //   [0, 1, 2, 3, 4, 6, 7, 8, 9, 10].map((i) => {
  //     this.items.push('User Number - ' + i);
  //   });
  // }

  // hideItems() {
  //   this.items = [];
  // }

  // toggle() {
  //   this.items.length ? this.hideItems() : this.showItems();
  // }

  // constructor(private router: Router, ) {
  //   this.router.events.subscribe((event: Event) => {
  //       if (event instanceof NavigationStart) {
  //           console.log('Navigation start');
  //       }
  //       if (event instanceof NavigationEnd) {
  //           console.log('Navigation end');
  //       }
  //       if (event instanceof NavigationError) {

  //           console.log(event.error);
  //       }
  //   });
  // }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
