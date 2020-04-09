import {Component, OnInit} from '@angular/core';
import {IProduct} from './latest-products.component.models';
import {EShopCategory} from '../../cart-store.service.models';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {

  // Component data
  public readonly latestProducts: IProduct[];

  constructor() {

    // Initialize latest products
    this.latestProducts = new Array(8).fill(0).map((v, i) => ({
      id: i + 1,
      category: [
        EShopCategory.Accessories,
        EShopCategory.CarParts,
        EShopCategory.Tires,
        EShopCategory.Wheels,
      ][Math.floor(Math.random() * 4)],
      displayName: 'Przykładowy produkt ze sklepu',
      rating: Math.floor(Math.random() * 2) + 3,
      price: Math.floor(Math.random() * 100) + 100,
      priceCurrency: 'zł',
      imgSrc: `../../../assets/images/products/product${i + 1}.png`
    }));

  }

  ngOnInit(): void {
  }

}
