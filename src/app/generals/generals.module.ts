import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {GeneralsComponent} from './generals.component';

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
            loadChildren: () => import('./about/about.module').then(r => r.AboutModule)
          },
          {
            path: 'contact',
            pathMatch: 'full',
            loadChildren: () => import('./contact/contact.module').then(r => r.ContactModule)
          },
          {
            path: 'payments',
            pathMatch: 'full',
            loadChildren: () => import('./payments/payments.module').then(r => r.PaymentsModule)
          },
          {
            path: 'shipments',
            pathMatch: 'full',
            loadChildren: () => import('./shipments/shipments.module').then(r => r.ShipmentsModule)
          },
          {
            path: 'returns-complaints',
            pathMatch: 'full',
            loadChildren: () => import('./returns-complaints/returns-complaints.module').then(r => r.ReturnsComplaintsModule)
          },
          {
            path: 'privacy-policy',
            pathMatch: 'full',
            loadChildren: () => import('./privacy-policy/privacy-policy.module').then(r => r.PrivacyPolicyModule)
          },
        ]
      },
    ])
  ]
})
export class GeneralsModule {
}
