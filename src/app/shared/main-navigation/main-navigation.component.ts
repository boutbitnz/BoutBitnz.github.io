import { Component, OnInit } from '@angular/core';
// import { AboutComponent } from './../../components/about/about.component';
// import { HomePgComponent } from './../../components/home-pg/home-pg.component';
// import { ContactInfoComponent } from './../../components/contact-info/contact-info.component';
// import { FooterComponent } from './../../shared/footer/footer.component';
// import { ProjectsComponent } from './../../components/projects/projects.component';
// import { AppRoutingModule } from './../../app-routing.module';

export type EditorType = 'about' |'contacts' |'header' | 'home' | 'name' | 'mnav' | 'pnav' | 'projects';

const mainNavTemplate = `
    <nav id="mainNav">
      <a href="#" class="navText" (click)="toggleEditor('home')">Home</a>
      <a href="#" class="navText" (click)="toggleEditor('about')">About</a>
      <a href="#" class="navText" (click)="toggleEditor('contacts')">Contacts</a>
      <a href="#" class="navText" (click)="toggleEditor('pnav')">Projects</a>
    </nav>

    <about *ngIf="showAbout"></about>
    <contacts *ngIf="showContacts"></contacts>
    <home *ngIf="showHome"></home>
    <pnav *ngIf="showPNav"></pnav>
    `;

const mainNavStyles = `
    header {
      width: 100%;
      height: 56px;
      top: 0;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
      display: -ms-flexbox;
      z-index: 1;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      transition: background-color 250ms linear;
    }
    `;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mnav',
  // templateUrl: './main-navigation.component.html'
  template: mainNavTemplate,
  styles: [ mainNavStyles ],

})
export class MainNavigationComponent implements OnInit {

  title = 'Main Navigation';

  editor: EditorType = 'home';

  get showAbout() {
    return this.editor === 'about';
  }

  get showContacts() {
    return this.editor === 'contacts';
  }

  // get showHeader() {
  //   return this.editor === 'header';
  // }

  get showHome() {
    return this.editor === 'home';
  }
  get showMNav() {
    return this.editor === 'mnav';
  }
  get showPNav() {
    return this.editor === 'pnav';
  }

  // get showProjects() {
  //   return this.editor === 'projects';
  // }

  // get showNameEditor() {
  //   return this.editor === 'name';
  // }

  // get showProfileEditor() {
  //   return this.editor === 'profile';
  // }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
  // constructor() { }

  ngOnInit() {
  }
}


// <nav id="mainNav">
//   <a (click)="toggleEditor('header')">Header</a>
//   <a href="#" class="navText" (click)="toggleEditor('home')">Home</a>
//   <a href="#" class="navText" (click)="toggleEditor('about')">About</a>
//   <a href="#" class="navText" (click)="toggleEditor('contacts')">Contacts</a>
//   <a href="#" class="navText" (click)="toggleEditor('projects')">Projects</a>
//   <a (click)="toggleEditor('name')">Name Editor</a>
//   <a (click)="toggleEditor('profile')">Profile Editor</a>
// </nav>

// <about *ngIf="showAbout"></about>
// <contacts *ngIf="showContacts"></contacts>
// <header *ngIf="showHeader"></header>
// <home *ngIf="showHome"></home>
// <name-editor *ngIf="showNameEditor"></name-editor>
// <profile-editor *ngIf="showProfileEditor"></profile-editor>
// <projects *ngIf="showProjects"></projects>



/* display: flex; */
/* overflow: hidden; */
/* background-color: #1E88E5; */
// display: -ms-flexbox;


// -webkit-user-select: none;
// -moz-user-select: none;
// -ms-user-select: none;
