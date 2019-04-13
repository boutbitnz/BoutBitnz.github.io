import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [ { path: 'shell', component:  }];

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ModuleMapLoaderModule,
    // RouterModule.forRoot(routes), // <-- *Important* to have lazy-loaded routes work
    ServerModule
  ],
  providers: [
    // Add universal-only providers here
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [ AppComponent ],
  declarations: [],
})

export class AppServerModule {}
