import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EShopCategory} from '../cart-store.service.models';

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
        path: EShopCategory.CarParts,
        children: shopCategoryRoutes,
      },
      {
        path: EShopCategory.Wheels,
        children: shopCategoryRoutes,
      },
      {
        path: EShopCategory.Tires,
        children: shopCategoryRoutes,
      },
      {
        path: EShopCategory.Accessories,
        children: shopCategoryRoutes,
      },
    ])
  ]
})
export class ShopModule {
}
