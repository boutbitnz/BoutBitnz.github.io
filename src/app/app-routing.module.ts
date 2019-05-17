import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { HomePgComponent } from './components/home-pg/home-pg.component';
// import { ProjectsComponent } from './components/projects/projects.component';
import { HeaderComponent } from './shared/header/header.component';

const routes: Routes = [

  // {path: '', component: HeaderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactInfoComponent},
  {path: 'home', component: HomePgComponent},
  // {path: 'projects', component: ProjectsComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: AboutComponent},
  // directs all other routes to the main page
  {path: '**', redirectTo: 'HomePgComponent'}

];

// const desktop_routes: Routes = [
//   {
//     path: '', component: DesktopFrontpageComponent, children:
//           [
//             {path: 'products/:productName', component: ProductComponentDesktop}
//           ]
//   },
//   {path: 'about', component: AboutComponent},
//   // directs all other routes to the main page
//   {path: '**', redirectTo: ''}
// ];

// const mobile_routes: Routes = [
//   {path: '', component: MobileFrontpageComponent},
//   {path: 'products/:productName', component: ProductComponentMobile},
//   {path: 'about', component: AboutComponent},
//   {path: 'user-profile', component: UserProfileComponent},
//   // directs all other routes to the main page
//   {path: '**', redirectTo: ''}
// ];

@NgModule({
  // imports: [RouterModule.forRoot(desktop_routes, {preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
  title = 'Routes';

  // public constructor(private router: Router,
  //                    private applicationStateService: ApplicationStateService) {

  //   if (applicationStateService.getIsMobileResolution()) {
  //     router.resetConfig(mobile_routes);
  //   }
  // }

  // /**
  //  * this function inject new routes for the given module instead the current routes. the operation happens on the given
  //  * current routes object so after this method a call to reset routes on router should be called with the the current routes object.
  //  * @param currentRoutes
  //  * @param routesToInject
  //  * @param childNameToReplaceRoutesUnder - the module name to replace its routes.
  //  */

  // private injectModuleRoutes(currentRoutes: Routes, routesToInject: Routes, childNameToReplaceRoutesUnder: string): void {
  //   for (let i = 0; i < currentRoutes.length; i++) {
  //     if (currentRoutes[i].loadChildren != null &&
  //       currentRoutes[i].loadChildren.toString().indexOf(childNameToReplaceRoutesUnder) !== -1) {
  //       // we found it. taking the route prefix
  //       const prefixRoute: string = currentRoutes[i].path;
  //       // first removing the module line
  //       currentRoutes.splice(i, 1);
  //       // now injecting the new routes
  //       // we need to add the prefix route first
  //       this.addPrefixToRoutes(routesToInject, prefixRoute);
  //       for (const route of routesToInject) {
  //         currentRoutes.push(route);
  //       }
  //       // since we found it we can break the injection
  //       return;
  //     }

  //     if (currentRoutes[i].children != null) {
  //       this.injectModuleRoutes(currentRoutes[i].children, routesToInject, childNameToReplaceRoutesUnder);
  //     }
  //   }
  // }

  // private addPrefixToRoutes(routes: Routes, prefix: string) {
  //   for (let i = 0; i < routes.length; i++) {
  //     routes[i].path = prefix + '/' + routes[i].path;
  //   }
  // }

}



