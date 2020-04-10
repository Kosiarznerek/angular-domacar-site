import {NgModule} from '@angular/core';
import {HammerModule} from '@angular/platform-browser';
import {NgxImageGalleryModule} from 'ngx-image-gallery';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {CommonModule} from '@angular/common';
import {ProductPreviewComponent} from './product-preview.component';
import {RouterModule} from '@angular/router';
import {ProductGalleryComponent} from './product-gallery/product-gallery.component';
import {ProductGeneralComponent} from './product-general/product-general.component';
import {RatingStarsComponent} from './rating-stars/rating-stars.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {RelatedProductsComponent} from './product-related/related-products.component';

@NgModule({
  declarations: [
    ProductPreviewComponent,
    ProductGalleryComponent,
    ProductGeneralComponent,
    RatingStarsComponent,
    ProductDetailsComponent,
    RelatedProductsComponent,
  ],
  imports: [
    CommonModule,
    HammerModule,
    NgxImageGalleryModule,
    CarouselModule,
    RouterModule.forChild([
      {path: '', component: ProductPreviewComponent}
    ])
  ]
})
export class ProductPreviewModule {
}
