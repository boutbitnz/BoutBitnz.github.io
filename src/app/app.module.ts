import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { map, catchError } from 'rxjs/operators';
import { MatDialogModule } from '@angular/material';
import { NgModule, Inject, PLATFORM_ID, APP_ID, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';

// import { CoreModule } from './core.module';
// Services
import { AppRoutingModule } from './app-routing.module';
import { ErrorDialogService } from './Services/errordialog.service';
import { HttpConfigInterceptor } from './Services/httpconfig.interceptor';
import { LoginService } from './Services/login.service';
import {Routes, RouterModule} from '@angular/router';

// Components
import { AppComponent } from './app.component';
// import { AboutComponent } from './components/about/about.component';
// import { HomePgComponent } from './components/home-pg/home-pg.component';
// import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ErrorDialogComponent } from './components/error-dialog/errordialog.component';
// import { FooterComponent } from './shared/footer/footer.component';
import { MainNavigationModule } from './shared/main-navigation/main-navigation.module';
import { ProjectsNavigationModule } from './shared/projects-navigation/projects-navigation.module';
import { ProjectsModule } from './components/projects/projects.module';


@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    // ContactInfoComponent,
    // FooterComponent,
    // HeaderComponent,
    // HomePgComponent,
    // ProjectsComponent,
    ErrorDialogComponent,
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({ appId: 'Boutbitnz Inc' }),
    // BrowserModule,
    BrowserAnimationsModule,
    // CoreModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MainNavigationModule,
    MatDialogModule,
    ProjectsNavigationModule,
    ProjectsModule
  ],

  // This is about how to handle the http request and responce using Angular 6&7 interceptor
  // And how to handle the error using material dialog
  providers: [
    LoginService,
    ErrorDialogService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  entryComponents: [ErrorDialogComponent],
  // Add ErrorDialogComponent add services

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
