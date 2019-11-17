import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner/banner.component';
import {SearchComponent} from './search/search.component';
import {WhyUsComponent} from './why-us/why-us.component';
import {CategoriesComponent} from './categories/categories.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {LatestProductsComponent} from './latest-products/latest-products.component';
import {CommonQuestionsComponent} from './common-questions/common-questions.component';
import {FindUsComponent} from './find-us/find-us.component';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BannerComponent,
    SearchComponent,
    WhyUsComponent,
    CategoriesComponent,
    DiscountsComponent,
    LatestProductsComponent,
    CommonQuestionsComponent,
    FindUsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ],
})
export class HomeModule {
}
