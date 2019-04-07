import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule, Event, NavigationStart, NavigationEnd, NavigationError  } from '@angular/router';
// import { LoginService } from './core/Services/login.service';

const wrapper =
`
<div class="wrapper" style="height: 100vh;">
  <div class="container-fluid">
    <div class="row">

    <header></header>
    <home></home>
    <footer class="footer"><small>© Copyright 2015, Boutbitnz Coorporation</small></footer>

    </div>
  </div>
  <router-outlet></router-outlet>
</div>
  `;

export type EditorType = 'about' |'contacts' |'header' | 'home' | 'name' | 'projects';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'boutbitnz',
  // templateUrl: './app.component.html',
  // templateUrl: './app.component.html',
  template:
  wrapper,

  // styleUrls: ['./app.component.scss']
  // providers: [angular.module('myApp', ['angular-loading-bar'])]
})
export class AppComponent implements OnInit {
  title = 'Boutbitnz Inc';

  editor: EditorType = 'name';

  get showAbout() {
    return this.editor === 'about';
  }

  get showContacts() {
    return this.editor === 'contacts';
  }

  get showHeader() {
    return this.editor === 'header';
  }

  get showHome() {
    return this.editor === 'home';
  }

  get showProjects() {
    return this.editor === 'projects';
  }

  // get showNameEditor() {
  //   return this.editor === 'name';
  // }

  // get showProfileEditor() {
  //   return this.editor === 'profile';
  // }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  // Angular-Interceptor | https://github.com/vigneshsithirai/Angular-Interceptor/blob/master/src/app/app.component.ts
  // constructor(public loginService: LoginService) {
  //   this.loginService.login({}).subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // getCustomerDetails() {
  //   this.loginService.getCustomerDetails().subscribe((data) => {
  //     console.log('----->>>', data);
  //   });
  // }

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

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}





// <div class="one-half column" style="margin-top: 15%">
// <i class="fa fa-spinner fa-spin fa-3x"></i>
// <br>Loading ...
// </div>

// <nav id="mainNav">
//   <a (click)="toggleEditor('header')">Header</a>
//   <a href="#" class="navText" (click)="toggleEditor('home')">Home</a>
//   <a href="#" class="navText" (click)="toggleEditor('about')">About</a>
//   <a href="#" class="navText" (click)="toggleEditor('contacts')">Contacts</a>
//   <a href="#" class="navText" (click)="toggleEditor('projects')">Projects</a>
//   <a (click)="toggleEditor('name')">Name Editor</a>
//   <a (click)="toggleEditor('profile')">Profile Editor</a>
// </nav>

// <section>
//   <projects></projects>
//   <about *ngIf="showAbout"></about>
//   <contacts *ngIf="showContacts"></contacts>
//   <header *ngIf="showHeader"></header>
//   <home *ngIf="showHome"></home>
//   <name-editor *ngIf="showNameEditor"></name-editor>
//   <profile-editor *ngIf="showProfileEditor"></profile-editor>
//   <projects *ngIf="showProjects"></projects>
// </section>


// angular-multi-view
// <div class="container-fluid">
//   <header></header>

//    <main id="main-content">
//      <div class="container main-content">
//        <router-outlet></router-outlet>
//      </div>
//    </main>
// </div>
