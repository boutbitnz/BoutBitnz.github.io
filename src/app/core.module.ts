import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

// import { ErrorDialogComponent } from './components/error-dialog/errordialog.component';
// Services
import { ErrorDialogService } from './Services/errordialog.service';
import { HttpConfigInterceptor } from './Services/httpconfig.interceptor';
import { LoginService } from './Services/login.service';

// import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // RouterModule // import routing
  ],

  providers: [
    LoginService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],

})
export class CoreModule { }
