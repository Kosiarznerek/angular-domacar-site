import {Component, OnInit} from '@angular/core';
import {ICartData} from './cart.component.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // Component data
  public cartData: ICartData;

  constructor() {

    // Initialize cart data
    this.cartData = {
      sum: Math.floor(Math.random() * 1000) + 100,
      sumCurrency: 'zł',
      products: new Array(3).fill(0).map((v, i) => ({
        displayName: `Przykładowsa das das das das das das das das day produkt ${i + 1}`,
        imageSrc: `../../../assets/images/products/product${i % 8 + 1}.png`,
        price: Math.floor(Math.random() * 1000) + 100,
        priceCurrency: 'zł',
        amount: Math.floor(Math.random() * 10) + 10
      }))
    };

  }

  ngOnInit() {
  }

}
