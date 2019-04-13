import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

const errorDialog = `
  <div>
    <div>
        <p>
            Reason: {{data.reason}}
        </p>
        <p>
            Status: {{data.status}}
        </p>
    </div>
  </div>
  `;
// import { HttpConfigInterceptor } from './httpconfig.interceptor';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'boutbitnz',
  template:
  errorDialog,

})
export class ErrorDialogComponent implements OnInit {

  title = 'Error Dialog';
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit() {
  }

}
