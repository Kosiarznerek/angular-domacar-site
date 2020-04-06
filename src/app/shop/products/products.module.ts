import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ListComponent} from './list/list.component';
import {RatingStarsComponent} from './list/rating-stars/rating-stars.component';
import {DropdownComponent} from './search/dropdown/dropdown.component';
import {SearchCarPartsComponent} from './search/search-car-parts/search-car-parts.component';
import {SearchWheelsComponent} from './search/search-wheels/search-wheels.component';
import {SearchTiresComponent} from './search/search-tires/search-tires.component';
import {SearchAccessoriesComponent} from './search/search-accessories/search-accessories.component';

@NgModule({
  declarations: [
    ProductsComponent,
    SearchComponent,
    ListComponent,
    RatingStarsComponent,
    DropdownComponent,
    SearchCarPartsComponent,
    SearchWheelsComponent,
    SearchTiresComponent,
    SearchAccessoriesComponent,
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
