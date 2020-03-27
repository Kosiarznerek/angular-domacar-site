import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductPreviewComponent} from './product-preview.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ProductPreviewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductPreviewComponent}
    ])
  ]
})
export class ProductPreviewModule {
}
