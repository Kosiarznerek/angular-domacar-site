import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(r => r.HomeModule)
  },
  {
    path: 'generals',
    loadChildren: () => import('./generals/generals.module').then(r => r.GeneralsModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    loadChildren: () => import('./unknown-route/unknown-route.module').then(r => r.UnknownRouteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
