
import { Component, OnInit } from '@angular/core';
// import { AboutComponent } from './../../components/about/about.component';
// import { HomePgComponent } from './../../components/home-pg/home-pg.component';
// import { ContactInfoComponent } from './../../components/contact-info/contact-info.component';
// import { FooterComponent } from './../../shared/footer/footer.component';
// import { ProjectsComponent } from './../../components/projects/projects.component';
// import { AppRoutingModule } from './../../app-routing.module';

// export type EditorType = 'about' |'contact' |'header' | 'home' | 'name' | 'projects';

const headerTemplate = `
    <div class="row">
    <div class="pageTitle">
      <h1>ELIZABETH BELL</h1>
      <h2>BoutBitnz</h2>
    </div>
    `;

const headerStyles = `
    header {
      position: fixed;
      width: 100%;
      height: 56px;
      top: 0;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.19);
      z-index: 1;
      color: #fff;
      user-select: none;
      transition: background-color 250ms linear;
    }
    `;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  // templateUrl: './header.component.html'
  template: headerTemplate,


  styles: [ headerStyles ],

})
export class HeaderComponent implements OnInit {

  title = 'Header';

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}

// <nav id="mainNav">
//   <a (click)="toggleEditor('header')">Header</a>
//   <a href="#" class="navText" (click)="toggleEditor('home')">Home</a>
//   <a href="#" class="navText" (click)="toggleEditor('about')">About</a>
//   <a href="#" class="navText" (click)="toggleEditor('contact')">Contact</a>
//   <a href="#" class="navText" (click)="toggleEditor('projects')">Projects</a>
//   <a (click)="toggleEditor('name')">Name Editor</a>
//   <a (click)="toggleEditor('profile')">Profile Editor</a>
// </nav>

// <about *ngIf="showAbout"></about>
// <contact *ngIf="showContact"></contact>
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
