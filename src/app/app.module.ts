import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { isPlatformBrowser } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AppShellComponent } from './components/app-shell/app-shell.component';

@NgModule({
  declarations: [
    AppComponent,
    // AppShellComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'boutbitnz' }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
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
