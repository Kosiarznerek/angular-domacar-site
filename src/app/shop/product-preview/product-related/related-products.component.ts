import {Component, OnInit} from '@angular/core';
import {EShopCategory} from '../../../cart-store.service.models';
import {IRelatedProduct} from './related-products.component.models';

@Component({
  selector: 'app-product-related',
  templateUrl: './product-related.component.html',
  styleUrls: ['./product-related.component.scss']
})
export class RelatedProductsComponent implements OnInit {

  // Component data
  public readonly relatedProducts: IRelatedProduct[];
  public readonly popularProducts: IRelatedProduct[];

  constructor() {

    // Initialize related products
    this.relatedProducts = new Array(4).fill(0).map((v, i) => ({
      id: i + 1,
      category: [
        EShopCategory.Accessories,
        EShopCategory.CarParts,
        EShopCategory.Tires,
        EShopCategory.Wheels,
      ][Math.floor(Math.random() * 4)],
      displayName: 'Powiązany produkt testowy',
      rating: Math.floor(Math.random() * 2) + 3,
      price: Math.floor(Math.random() * 100) + 100,
      priceCurrency: 'zł',
      imgSrc: `assets/images/products/product${i + 4}.png`
    }));

    // Initialize popular products
    this.popularProducts = new Array(4).fill(0).map((v, i) => ({
      id: i + 1,
      category: [
        EShopCategory.Accessories,
        EShopCategory.CarParts,
        EShopCategory.Tires,
        EShopCategory.Wheels,
      ][Math.floor(Math.random() * 4)],
      displayName: 'Powiązany produkt testowy',
      rating: Math.floor(Math.random() * 2) + 3,
      price: Math.floor(Math.random() * 100) + 100,
      priceCurrency: 'zł',
      imgSrc: `assets/images/products/product${i + 1}.png`
    }));

  }

  ngOnInit(): void {
  }

}
