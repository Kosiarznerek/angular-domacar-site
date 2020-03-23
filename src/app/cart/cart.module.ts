import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart.component';
import {RouterModule} from '@angular/router';
import {IRouterData} from '../generals/generals.module.models';

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
            data: {
              breadcrumb: 'Podgląd',
              parallaxSource: '/assets/images/parallax/parallax1.jpg'
            } as IRouterData,
            loadChildren: () => import('./preview/preview.module').then(r => r.PreviewModule)
          },
          {
            path: 'checkout',
            pathMatch: 'full',
            data: {
              breadcrumb: 'Formularz wysyłkowy',
              parallaxSource: '/assets/images/parallax/parallax2.jpg'
            } as IRouterData,
            loadChildren: () => import('./checkout/checkout.module').then(r => r.CheckoutModule)
          },
        ]
      },
    ])
  ]
})
export class CartModule {
}
