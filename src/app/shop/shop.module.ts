import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShopCategory} from './shop.module.models';

const shopCategoryRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(r => r.ProductsModule)
  },
  {
    path: 'product-preview/:id',
    loadChildren: () => import('./product-preview/product-preview.module').then(r => r.ProductPreviewModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ShopCategory.CarParts,
        children: shopCategoryRoutes,
      },
      {
        path: ShopCategory.Wheels,
        children: shopCategoryRoutes,
      },
      {
        path: ShopCategory.Tires,
        children: shopCategoryRoutes,
      },
      {
        path: ShopCategory.Accessories,
        children: shopCategoryRoutes,
      },
    ])
  ]
})
export class ShopModule {
}
