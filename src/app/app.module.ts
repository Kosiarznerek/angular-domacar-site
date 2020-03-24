import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app-main/app.component';
import {NavbarTopComponent} from './app-main/navbar-top/navbar-top.component';
import {FooterComponent} from './app-main/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {CartComponent} from './app-main/navbar-top/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
