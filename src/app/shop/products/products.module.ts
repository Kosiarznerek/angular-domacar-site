import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {ProductSearchComponent} from './product-search/product-search.component';
import {ProductListComponent} from './product-list/product-list.component';
import {RatingStarsComponent} from './rating-stars/rating-stars.component';
import {DropdownComponent} from './dropdown/dropdown.component';
import {SearchCarPartsComponent} from './product-search/search-car-parts/search-car-parts.component';
import {SearchWheelsComponent} from './product-search/search-wheels/search-wheels.component';
import {SearchTiresComponent} from './product-search/search-tires/search-tires.component';
import {SearchAccessoriesComponent} from './product-search/search-accessories/search-accessories.component';
import {ProductPaginatorComponent} from './product-paginator/product-paginator.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductSearchComponent,
    ProductListComponent,
    RatingStarsComponent,
    DropdownComponent,
    SearchCarPartsComponent,
    SearchWheelsComponent,
    SearchTiresComponent,
    SearchAccessoriesComponent,
    ProductPaginatorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ProductsComponent}
    ])
  ]
})
export class ProductsModule {
}
