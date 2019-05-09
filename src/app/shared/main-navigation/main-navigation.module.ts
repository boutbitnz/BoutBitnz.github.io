import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';


import { AppRoutingModule } from './../../app-routing.module';

import { AboutComponent } from './../../components/about/about.component';
import { ContactInfoComponent } from './../../components/contact-info/contact-info.component';
import { FooterComponent } from './../../shared/footer/footer.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { HomePgComponent } from './../../components/home-pg/home-pg.component';
import { MainNavigationComponent } from './main-navigation.component';
// import { ProjectsComponent } from './../../components/projects/projects.component';
import { ProjectsNavigationModule } from '../projects-navigation/projects-navigation.module';



@NgModule({
  declarations: [
    AboutComponent,
    ContactInfoComponent,
    FooterComponent,
    HeaderComponent,
    HomePgComponent,
    MainNavigationComponent,
    // ProjectsComponent,
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    // https://stackblitz.com/edit/angular-v6-animations?file=app%2Fanimations.ts
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ProjectsNavigationModule,
    ReactiveFormsModule
  ],

  exports: [
    AboutComponent,
    ContactInfoComponent,
    FooterComponent,
    HeaderComponent,
    HomePgComponent,
    MainNavigationComponent,
    // ProjectsComponent,
  ]
})
export class MainNavigationModule implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
