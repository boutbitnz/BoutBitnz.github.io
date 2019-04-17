import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

import { ProjectsNavigationComponent } from './projects-navigation.component';


// import { NameEditorComponent } from '';
// import { ProfileEditorComponent } from '';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [ProjectsNavigationComponent],
  exports: [ProjectsNavigationComponent]
})
export class ProjectsNavigationModule { }
