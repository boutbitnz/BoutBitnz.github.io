import { Component, OnInit } from '@angular/core';

const homeTemplate = `
  <div class="row">
    <div class="pageTitle">
      <h1>ELIZABETH BELL</h1>
      <h2>BoutBitnz</h2>
    </div>

    <div class ="heroImg" >
      <img src='../../../assets/imgs/botBody.png' alt= "Image of 3 figures"
      style='float:right; margin: 4em -6em 0em 0em;'/>
  </div>
`;
const homeStyles = `
      div.heroImg {
        display: inline-flex;
        float: right;
        height: 80vh;
        margin-top: -3em;
      }

      .heroImg img {
        -webkit-filter: drop-shadow(12px 12px 12px rgba(0, 0, 0, 0.8));
        cursor: default;
        opacity: .60;
      }

    `;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'home',
  // templateUrl: './boutbitnz-home.component.html',
  template:
  homeTemplate,

  styles: [
    homeStyles
  ]

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
