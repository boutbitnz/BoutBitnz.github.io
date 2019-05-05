import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// import { ErrorDialogComponent } from './components/error-dialog/errordialog.component';
// Services
// import { ErrorDialogService } from './Services/errordialog.service';
// import { HttpConfigInterceptor } from './Services/httpconfig.interceptor';
// import { LoginService } from './Services/login.service';

// import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    // HttpClientModule,
    // RouterModule // import routing
  ],

  // This is about how to handle the http request and responce using Angular 6&7 interceptor
  // And how to handle the error using material dialog
  // providers: [
  //   LoginService,
  //   ErrorDialogService,
  //   { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  // ],

})
export class CoreModule { }
