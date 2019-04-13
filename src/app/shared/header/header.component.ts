
import { Component, OnInit } from '@angular/core';
// import { AboutComponent } from './../../components/about/about.component';
// import { HomePgComponent } from './../../components/home-pg/home-pg.component';
// import { ContactInfoComponent } from './../../components/contact-info/contact-info.component';
// import { FooterComponent } from './../../shared/footer/footer.component';
// import { ProjectsComponent } from './../../components/projects/projects.component';
// import { AppRoutingModule } from './../../app-routing.module';

export type EditorType = 'about' |'contacts' |'header' | 'home' | 'name' | 'projects';

const mainNav = `
    <nav id="mainNav">
      <a href="#" class="navText" (click)="toggleEditor('home')">Home</a>
      <a href="#" class="navText" (click)="toggleEditor('about')">About</a>
      <a href="#" class="navText" (click)="toggleEditor('contacts')">Contacts</a>
      <a href="#" class="navText" (click)="toggleEditor('projects')">Projects</a>
    </nav>

    <about *ngIf="showAbout"></about>
    <contacts *ngIf="showContacts"></contacts>
    <header *ngIf="showHeader"></header>
    <home *ngIf="showHome"></home>
    <projects *ngIf="showProjects"></projects>
    `;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  // templateUrl: './header.component.html'
  template:
    mainNav,


  // styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  title = 'Header';

  editor: EditorType = 'home';

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
  // constructor() { }

  ngOnInit() {
  }
}
