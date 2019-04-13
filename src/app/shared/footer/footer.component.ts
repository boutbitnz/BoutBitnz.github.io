import { Component, OnInit } from '@angular/core';

const footerTemplate = `<footer class="footer"><small>© Copyright 2015, Boutbitnz Coorporation</small></footer>`;

const footerStyles = `
    footer {
      position: fixed;
      cursor: pointer;
      top: 95%;
    }

    footer small {
      color: hsl(0, 100%, 80%);
      text-shadow: -3px -2px 3px #000000;
      text-align: center;
      font-size: 10px;
    }

    footer small:hover {
      color: #fff;
    }
`;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'footer',
  // templateUrl: './footer.component.html',
  template: footerTemplate,
  // styleUrls: ['./footer.component.scss']
  styles: [
  footerStyles
  ]
})
export class FooterComponent implements OnInit {

  title = 'Footer';

  constructor() { }

  ngOnInit() {
  }

}
