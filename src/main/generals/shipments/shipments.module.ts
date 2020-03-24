import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShipmentsComponent} from './shipments.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ShipmentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ShipmentsComponent}
    ])
  ]
})
export class ShipmentsModule {
}
