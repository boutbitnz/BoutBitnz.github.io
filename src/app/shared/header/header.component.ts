
import { Component, OnInit } from '@angular/core';

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
    <home *ngIf="showHomePg"></home>
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
  constructor() { }

  ngOnInit() {
  }

}

// <a (click)="toggleEditor('header')">Header</a>

// <a (click)="toggleEditor('name')">Name Editor</a>
// <a (click)="toggleEditor('profile')">Profile Editor</a>

// <name-editor *ngIf="showNameEditor"></name-editor>
// <profile-editor *ngIf="showProfileEditor"></profile-editor>
