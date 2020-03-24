import {Component, OnInit} from '@angular/core';
import {IProduct} from './latest-products.component.models';

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
      displayName: [
        'Przykładowy produkt ze sklepu',
        'Przykładowy produkt ze sklepu o bardzo długiej nazwie',
      ][Math.floor(Math.random() * 2)],
      rating: Math.floor(Math.random() * 2) + 3,
      price: Math.floor(Math.random() * 100) + 100,
      priceCurrency: 'zł',
      category: [
        'Części samochdowe',
        'Akcesoria',
        'Felgi',
        'Opony'
      ][Math.floor(Math.random() * 4)],
      imgSrc: `../../../assets/images/products/product${i + 1}.png`
    }));

  }

  ngOnInit() {
  }

}
