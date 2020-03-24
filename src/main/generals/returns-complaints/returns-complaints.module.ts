import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReturnsComplaintsComponent} from './returns-complaints.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ReturnsComplaintsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ReturnsComplaintsComponent}
    ])
  ]
})
export class ReturnsComplaintsModule {
}
