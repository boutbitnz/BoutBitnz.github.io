import { Component, OnInit } from '@angular/core';
import { fade } from '../../animations';

export type EditorType = 'menu' | 'profile' | 'pnav' |'rform';

const projectsNavTemplate = `
    <nav id="projNav">
      <a href="#" (click)="toggleEditor('rform')" (click)="toggleFade()"><small><h2 [@fade]="fade" fast>Reactive Forms</h2></small></a>
      <a href="#" (click)="toggleEditor('menu')" (click)="toggleFade()"><small><h2 [@fade]="fade" fast>Animation Menu</h2></small></a>
    </nav>

    <div layout="column" layout-align-xs="space-between none">
      <rform *ngIf="showrForm"></rform>
      <menu *ngIf="showMenu"></menu>
    </div>
    `;

    // <name-editor *ngIf="showNameEditor"></name-editor>
    // <profile-editor *ngIf="showProfileEditor"></profile-editor>
const projectsNavStyles = ` h3 {font-family: fantasy;} `;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pnav',
  template: projectsNavTemplate,
  styles: [ projectsNavStyles ],
  animations: [ fade ],
})
export class ProjectsNavigationComponent implements OnInit {

  title = 'Projects Navigation';

  editor: EditorType = 'pnav';

  fade = 'fadeIn';

  // https://stackblitz.com/edit/angular-v6-animations?file=app%2Fanimations.ts
  toggleFade() {
    this.fade = this.fade === 'fadeIn' ? 'fadeOut' : 'fadeIn';
  }

  get showrForm() {
    return this.editor === 'rform';
  }

  get showMenu() {
    return this.editor === 'menu';
  }

  get showPNav() {
    return this.editor === 'pnav';
  }
  get showProfileEditor() {
    return this.editor === 'profile';
  }

  constructor() { }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

  ngOnInit() {
  }

}
