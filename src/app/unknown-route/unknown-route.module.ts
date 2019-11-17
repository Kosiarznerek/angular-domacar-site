import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnknownRouteComponent} from './unknown-route.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    UnknownRouteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: UnknownRouteComponent}
    ])
  ]
})
export class UnknownRouteModule {
}
