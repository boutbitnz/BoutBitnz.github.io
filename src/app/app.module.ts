import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { NgModule, Inject, PLATFORM_ID, APP_ID, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core.module';

import { ErrorDialogComponent } from './components/error-dialog/errordialog.component';
import { HttpConfigInterceptor } from './Services/httpconfig.interceptor';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
// import { AboutComponent } from './components/about/about.component';
// import { HomePgComponent } from './components/home-pg/home-pg.component';
// import { ContactInfoComponent } from './components/contact-info/contact-info.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { ProjectsComponent } from './components/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './shared/header/header.module';

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
    CoreModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    MaterialModule,
    HeaderModule
  ],

  // providers: [
  //   {
  //     provide: APP_INITIALIZER,
  //     useFactory: configInitializationFactory,
  //     deps: [ConfigService, Injector],
  //     multi: true
  //   }],
  // ],

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
