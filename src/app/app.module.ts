import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import {LayoutModule} from '@angular/cdk/layout';
import {LOCALE_ID, NgModule} from '@angular/core';

import {registerLocaleData} from '@angular/common';
import localePl from '@angular/common/locales/pl';
import localePlExtra from '@angular/common/locales/extra/pl';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app-main/app.component';
import {NavbarTopComponent} from './app-main/navbar-top/navbar-top.component';
import {FooterComponent} from './app-main/footer/footer.component';
import {CartComponent} from './app-main/navbar-top/cart/cart.component';

registerLocaleData(localePl, 'pl-PL', localePlExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    FooterComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pl-PL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
