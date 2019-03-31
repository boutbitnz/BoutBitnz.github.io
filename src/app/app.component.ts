import { Component } from '@angular/core';
import { Routes, Router, RouterModule, Event, NavigationStart, NavigationEnd, NavigationError  } from '@angular/router';
import { LoginService } from './core/Services/login.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'boutbitnz',
  templateUrl: './app.component.html',
  // templateUrl: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  // providers: [angular.module('myApp', ['angular-loading-bar'])]
})
export class AppComponent {
  title = 'Boutbitnz Inc';

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

//   constructor(private router: Router, ) {
//     this.router.events.subscribe((event: Event) => {
//         if (event instanceof NavigationStart) {
//             console.log('Navigation start');
//         }
//         if (event instanceof NavigationEnd) {
//             console.log('Navigation end');
//         }
//         if (event instanceof NavigationError) {

//             console.log(event.error);
//         }
//     });
// }

}
