import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

import { AppRoutingModule } from './../../app-routing.module';
import { AnimationMenuComponent, } from './../../components/animation-menu/animation-menu.component';
import { GraphQLModule } from './../../graphql.module';


import { ProjectsNavigationComponent } from './projects-navigation.component';
import { ReactiveFormComponent } from '../../components/reactive-form/reactive-form.component';

// import { ProfileEditorComponent } from '';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    // https://stackblitz.com/edit/angular-v6-animations?file=app%2Fanimations.ts
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GraphQLModule
  ],
  declarations: [AnimationMenuComponent, ProjectsNavigationComponent, ReactiveFormComponent],
  exports: [ProjectsNavigationComponent]
})
export class ProjectsNavigationModule implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
