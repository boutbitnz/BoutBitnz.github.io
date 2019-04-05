import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Services


// Tools
import { AppShellComponent } from './tools/app-shell.component';
import { ErrorDialogComponent } from './tools/errordialog.component';
// import { ErrorDialogService } from './Services/errordialog.service';
// import { HttpConfigInterceptor } from './tools/httpconfig.interceptor';
// import { LoginService } from './Services/login.service';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule // import routing
  ],
  declarations: [
    AppShellComponent,
    ErrorDialogComponent,
    // ErrorDialogService,
    // HttpConfigInterceptor,
  ],
  exports: [
    AppShellComponent,
    ErrorDialogComponent,
    // ErrorDialogService,
    // LoginService,
    // HttpConfigInterceptor
  ]

  // providers: [
  //   LoginService,
  //   ErrorDialogService,
  //   { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  // ],

})
export class CoreModule { }
