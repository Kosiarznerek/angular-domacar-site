import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckoutComponent} from './checkout.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: CheckoutComponent}
    ]),
    ReactiveFormsModule,
  ]
})
export class CheckoutModule {
}
