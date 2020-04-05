import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ListComponent} from './list/list.component';
import {RatingStarsComponent} from './list/rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    ProductsComponent,
    SearchComponent,
    ListComponent,
    RatingStarsComponent,
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
