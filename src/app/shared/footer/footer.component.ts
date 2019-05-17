import { Component, OnInit } from '@angular/core';

const footerTemplate = `<footer class="footer"><hr /><small>© Copyright 2015, Boutbitnz Coorporation</small></footer>`;

const footerStyles = `
  footer { position: absolute; text-align: -webkit-center;
  cursor: pointer; bottom: 3em; }
  footer small:hover { color: #fff; }
  hr { width: 100vw; }

  footer small {
    color: hsl(0, 100%, 80%);
    text-shadow: -3px -2px 3px #000000;
    font-size: 10px;
  }
`;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-footer',
  // templateUrl: './footer.component.html',
  template: footerTemplate,
  // styleUrls: ['./footer.component.scss']
  styles: [
  footerStyles
  ]
})
export class FooterComponent implements OnInit {

  title = 'Footer';
  data = 'Footer';

  constructor() { }

  ngOnInit() {
  }

}
