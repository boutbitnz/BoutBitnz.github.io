import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ],

exports: [FooterComponent]
})
export class FooterModule implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
