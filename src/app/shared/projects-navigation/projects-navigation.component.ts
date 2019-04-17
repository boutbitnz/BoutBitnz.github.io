import { Component, OnInit } from '@angular/core';
// import { fade } from 'src/app/animations';


const projectsNavTemplate = `
    <nav id="projNav">
      <a href="#" (click)="toggleEditor('profile')"><small><h2>Profile Editor</h2></small></a>
      <a href="#" (click)="toggleEditor('name')"><small><h2>Name Editor</h2></small></a>
    </nav>

    <div layout="column" layout-align-xs="space-between none">

    </div>

    `;
    // <name-editor *ngIf="showNameEditor"></name-editor>
    // <profile-editor *ngIf="showProfileEditor"></profile-editor>
const projectsNavStyles = ` h3 {font-family: fantasy;} `;

// animations: [ fade ]

export type EditorType = 'name' | 'profile';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pnav',
  template: projectsNavTemplate,
  styles: [ projectsNavStyles ],
  // styleUrls: ['./projects-navigation.component.scss']
})
export class ProjectsNavigationComponent implements OnInit {


  get showProfileEditor() {
    return this.editor === 'profile';
  }

  get showNameEditor() {
    return this.editor === 'name';
  }

  constructor() { }

  title = 'Projects Navigation';

  editor: EditorType = 'name';

  // fade = 'fadeIn';

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
  // toggleFade() {
  //   this.fade = this.fade === 'fadeIn' ? 'fadeOut' : 'fadeIn';
  // }

  ngOnInit() {
  }

}
