import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// export type EditorType = 'about' |'contacts' |'header' | 'home' | 'name' | 'projects';


@NgModule({
  // declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  // exports: [HeaderComponent, FooterComponent]
})
export class SharedModule {

  // editor: EditorType = 'name';

  // get showAbout() {
  //   return this.editor === 'about';
  // }

  // get showContacts() {
  //   return this.editor === 'contacts';
  // }

  // get showHeader() {
  //   return this.editor === 'header';
  // }

  // get showHome() {
  //   return this.editor === 'home';
  // }

  // get showProjects() {
  //   return this.editor === 'projects';
  // }

  // // get showNameEditor() {
  // //   return this.editor === 'name';
  // // }

  // // get showProfileEditor() {
  // //   return this.editor === 'profile';
  // // }

  // toggleEditor(type: EditorType) {
  //   this.editor = type;
  // }
 }
