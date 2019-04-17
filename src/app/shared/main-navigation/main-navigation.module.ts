import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../../app-routing.module';

import { AboutComponent } from './../../components/about/about.component';
import { ContactInfoComponent } from './../../components/contact-info/contact-info.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { HomePgComponent } from './../../components/home-pg/home-pg.component';
import { MainNavigationComponent } from './main-navigation.component';
// import { ProjectsComponent } from './../../components/projects/projects.component';
import { ProjectsNavigationModule } from '../projects-navigation/projects-navigation.module';



@NgModule({
  declarations: [
    AboutComponent,
    ContactInfoComponent,
    HeaderComponent,
    HomePgComponent,
    MainNavigationComponent,
    // ProjectsComponent,
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    ProjectsNavigationModule,
  ],

  exports: [
    AboutComponent,
    ContactInfoComponent,
    HeaderComponent,
    HomePgComponent,
    MainNavigationComponent,
    // ProjectsComponent,
  ]
})
export class MainNavigationModule { }
