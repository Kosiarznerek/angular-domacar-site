import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductPreviewComponent} from './product-preview.component';
import {RouterModule} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {GeneralComponent} from './general/general.component';
import {DetailsComponent} from './details/details.component';
import {RelatedProductsComponent} from './related-products/related-products.component';

@NgModule({
  declarations: [
    ProductPreviewComponent,
    GalleryComponent,
    GeneralComponent,
    DetailsComponent,
    RelatedProductsComponent,
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
