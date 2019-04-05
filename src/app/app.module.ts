import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';

import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';

// import { AppShellComponent } from './core/tools/app-shell.component';
// import { ErrorDialogComponent } from './core/tools/errordialog.component';
import { ErrorDialogService } from './core/Services/errordialog.service';
// import { ErrorDialogComponent } from './core/tools/errordialog.component';
import { HttpConfigInterceptor } from './core/tools/httpconfig.interceptor';
import { LoginService } from './core/Services/login.service';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomePgComponent } from './components/home-pg/home-pg.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    // AppShellComponent,
    ContactInfoComponent,
    HeaderComponent,
    HomePgComponent,
    ProjectsComponent,
    // ErrorDialogComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'Boutbitnz Inc' }),
    // BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    // SharedModule
  ],
  providers: [
    LoginService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  entryComponents: [HomePgComponent],

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
