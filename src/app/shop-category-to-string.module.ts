import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShopCategoryToStringPipe} from './shop-category-to-string.pipe';

@NgModule({
  declarations: [
    ShopCategoryToStringPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShopCategoryToStringPipe,
  ]
})
export class ShopCategoryToStringModule {
}
