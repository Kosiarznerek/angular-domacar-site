import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {GeneralsComponent} from './generals.component';
import {IRouterData} from './generals.module.models';

@NgModule({
  declarations: [
    GeneralsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: GeneralsComponent, children: [
          {
            path: 'about',
            pathMatch: 'full',
            data: {
              breadcrumb: 'O nas',
              parallaxSource: '/assets/images/parallax/parallax1.jpg'
            } as IRouterData,
            loadChildren: () => import('./about/about.module').then(r => r.AboutModule)
          },
          {
            path: 'contact',
            pathMatch: 'full',
            data: {
              breadcrumb: 'Kontakt',
              parallaxSource: '/assets/images/parallax/parallax2.jpg'
            } as IRouterData,
            loadChildren: () => import('./contact/contact.module').then(r => r.ContactModule)
          },
          {
            path: 'payments',
            pathMatch: 'full',
            data: {
              breadcrumb: 'Płatności',
              parallaxSource: '/assets/images/parallax/parallax3.jpg'
            } as IRouterData,
            loadChildren: () => import('./payments/payments.module').then(r => r.PaymentsModule)
          },
          {
            path: 'shipments',
            pathMatch: 'full',
            data: {
              breadcrumb: 'Dostawa',
              parallaxSource: '/assets/images/parallax/parallax4.jpg'
            } as IRouterData,
            loadChildren: () => import('./shipments/shipments.module').then(r => r.ShipmentsModule)
          },
          {
            path: 'returns-complaints',
            pathMatch: 'full',
            data: {
              breadcrumb: 'Zwroty i reklamacje',
              parallaxSource: '/assets/images/parallax/parallax1.jpg'
            } as IRouterData,
            loadChildren: () => import('./returns-complaints/returns-complaints.module').then(r => r.ReturnsComplaintsModule)
          },
          {
            path: 'privacy-policy',
            pathMatch: 'full',
            data: {
              breadcrumb: 'Polityka prywatności',
              parallaxSource: '/assets/images/parallax/parallax2.jpg'
            } as IRouterData,
            loadChildren: () => import('./privacy-policy/privacy-policy.module').then(r => r.PrivacyPolicyModule)
          },
        ]
      },
    ])
  ]
})
export class GeneralsModule {
}
