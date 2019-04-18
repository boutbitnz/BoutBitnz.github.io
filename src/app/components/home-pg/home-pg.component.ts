import { Component, OnInit } from '@angular/core';

const heroTemplate = `
    <header></header>
    <div class ="heroImg">
      <img src='../../../assets/imgs/botBody.png' alt= "Image of 3 figures"
      style=''/>
    </div>
`;
const heroStyles = `
    .heroImg {
      float: left;
      height: 80vh;
      padding: .5em;
      margin-left: -5em;
    }
    .heroImg img {
      -webkit-filter: drop-shadow(12px 12px 12px rgba(0, 0, 0, 0.8));
      height: -webkit-fill-available;
      cursor: default;
      opacity: .60;
    }
`;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  // templateUrl: './boutbitnz-home.component.html',
  template: heroTemplate,
  styles: [ heroStyles ]
})

// <div class ="heroImg" >
// <img src='../../../assets//imgs/botBody.png' alt= "Image of 3 figures"/>
// style='float:right; margin: 4em -6em 0em 0em;'
// </div>

// <img class="heroImg" width="300" alt="Boutbitnz Logo" src="./assets/imgs/botBody.png">

export class HomePgComponent implements OnInit {

  title = 'Home';

  constructor() { }

  ngOnInit() {
  }

}
