import { title } from 'process';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  // `<img class="loading-indicator" src="loading.gif">`,
  styleUrls: ['./app-shell.component.scss'],
//   [
//     `
//     .loading-indicator {
//       height: 300px;
//       margin: 0 auto;
//     }
//   `
// ]
})

export class AppShellComponent implements OnInit {

  title = 'App Shell';
  constructor() { }

  ngOnInit() {
  }

}
