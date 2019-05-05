
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { isPlatformBrowser } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './core/tools/app-shell.component';
import { RouterModule } from '@angular/router';
import {LoginService} from './core/Services/login.service';
import {ErrorDialogService} from './core/Services/errordialog.service';
import {HttpConfigInterceptor} from './core/tools/httpconfig.interceptor';
import {ErrorDialogComponent} from './core/tools/errordialog.component';


@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    ErrorDialogComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'boutbitnz' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [
    LoginService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  entryComponents: [ErrorDialogComponent],

  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    // Universal App
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    // console.log(`Running ${platform} with appId=${appId}`);
    console.log(`Running ${platform} with ${appId}`);
  }
}
