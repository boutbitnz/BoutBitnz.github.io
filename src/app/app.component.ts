import { Component } from '@angular/core';
import { Routes, Router, RouterModule, Event, NavigationStart, NavigationEnd, NavigationError  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
  // providers: [angular.module('myApp', ['angular-loading-bar'])]
})
export class AppComponent {
  title = 'boutbitnz';

  constructor(private router: Router, ) {
    this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            console.log('Navigation start');
        }
        if (event instanceof NavigationEnd) {
            console.log('Navigation end');
        }
        if (event instanceof NavigationError) {

            console.log(event.error);
        }
    });
}

}
