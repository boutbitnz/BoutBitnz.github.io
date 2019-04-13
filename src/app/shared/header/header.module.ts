import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './../../components/about/about.component';
import { HomePgComponent } from './../../components/home-pg/home-pg.component';
import { ContactInfoComponent } from './../../components/contact-info/contact-info.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { ProjectsComponent } from './../../components/projects/projects.component';
import { AppRoutingModule } from './../../app-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    ContactInfoComponent,
    HeaderComponent,
    HomePgComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    AboutComponent,
    ContactInfoComponent,
    HeaderComponent,
    HomePgComponent,
    ProjectsComponent,
  ]
})
export class HeaderModule { }
