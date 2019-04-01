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
    <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcv
    MjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE
    0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdj
    IyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1M
    i4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3
    IDQwLjl6IiAvPgogIDwvc3ZnPg==">
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


