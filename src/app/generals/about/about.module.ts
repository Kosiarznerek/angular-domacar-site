import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {RouterModule} from '@angular/router';
import {WhatWeDoComponent} from './what-we-do/what-we-do.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {ExperienceComponent} from './experience/experience.component';
import {PartnersComponent} from './partners/partners.component';
import {ServicesComponent} from './services/services.component';
import {CarouselModule} from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AboutComponent,
    WhatWeDoComponent,
    StatisticsComponent,
    ExperienceComponent,
    PartnersComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule.forChild([
      {path: '', component: AboutComponent}
    ])
  ]
})
export class AboutModule {
}
