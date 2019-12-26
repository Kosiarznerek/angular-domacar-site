import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner/banner.component';
import {SearchComponent} from './search/search.component';
import {WhyUsComponent} from './why-us/why-us.component';
import {CategoriesComponent} from './categories/categories.component';
import {LatestProductsComponent} from './latest-products/latest-products.component';
import {CommonQuestionsComponent} from './common-questions/common-questions.component';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {ServicesIconsComponent} from './services-icons/services-icons.component';
import {VehicleComponent} from './search/vehicle/vehicle.component';
import {PartsComponent} from './search/parts/parts.component';
import {RatingStarsComponent} from './latest-products/rating-stars/rating-stars.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BannerComponent,
    SearchComponent,
    WhyUsComponent,
    CategoriesComponent,
    LatestProductsComponent,
    CommonQuestionsComponent,
    HomeComponent,
    ServicesIconsComponent,
    VehicleComponent,
    PartsComponent,
    RatingStarsComponent,
  ],
  entryComponents: [
    PartsComponent,
    VehicleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ]),
    ReactiveFormsModule
  ],
})
export class HomeModule {
}
