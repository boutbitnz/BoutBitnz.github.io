import { Component, OnInit } from '@angular/core';
// import { fade } from 'src/app/animations';


const projectsNavTemplate = `
    <nav id="projNav">
      <a href="#" (click)="toggleEditor('rform')"><small><h2>Reactive Forms</h2></small></a>
      <a href="#" (click)="toggleEditor('name')"><small><h2>Name Editor</h2></small></a>
    </nav>

    <div layout="column" layout-align-xs="space-between none">
      <rform *ngIf="showrForm"></rform>
    </div>

    `;
    // <name-editor *ngIf="showNameEditor"></name-editor>
    // <profile-editor *ngIf="showProfileEditor"></profile-editor>
const projectsNavStyles = ` h3 {font-family: fantasy;} `;

// animations: [ fade ]

export type EditorType = 'name' | 'profile' | 'rform';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pnav',
  template: projectsNavTemplate,
  styles: [ projectsNavStyles ],
  // styleUrls: ['./projects-navigation.component.scss']
})
export class ProjectsNavigationComponent implements OnInit {


  get showrForm() {
    return this.editor === 'rform';
  }

  get showNameEditor() {
    return this.editor === 'name';
  }

  get showProfileEditor() {
    return this.editor === 'profile';
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
