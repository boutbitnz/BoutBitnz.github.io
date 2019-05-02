import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

import { ProjectsNavigationComponent } from './projects-navigation.component';
import { ReactiveFormComponent } from 'src/app/components/reactive-form/reactive-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { NameEditorComponent } from '';
// import { ProfileEditorComponent } from '';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    // https://stackblitz.com/edit/angular-v6-animations?file=app%2Fanimations.ts
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [ProjectsNavigationComponent, ReactiveFormComponent],
  exports: [ProjectsNavigationComponent]
})
export class ProjectsNavigationModule { }
