import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: CartComponent, children: [
          {
            path: 'preview',
            pathMatch: 'full',
            loadChildren: () => import('./preview/preview.module').then(r => r.PreviewModule)
          },
          {
            path: 'checkout',
            pathMatch: 'full',
            loadChildren: () => import('./checkout/checkout.module').then(r => r.CheckoutModule)
          },
        ]
      },
    ])
  ]
})
export class CartModule {
}
