import { title } from 'process';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell',
  // templateUrl: './app-shell.component.html',
  template:
  `
  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
    <img class="heroImg" width="300" alt="Boutbitnz Logo" src="./assets/imgs/botBody.png">
  </div>
  <router-outlet></router-outlet>
`,

  // styleUrls: ['./app-shell.component.scss'],
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

  title = 'Boutbitnz Inc';
  constructor() { }

  ngOnInit() {
  }

}


