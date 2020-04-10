import {Component, OnInit} from '@angular/core';
import {IProductsGenerals} from './general.component.models';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  // Component data
  public productsGenerals: IProductsGenerals;

  constructor() {
  }

  ngOnInit(): void {

    // Create mocked data
    this.productsGenerals = {
      displayName: 'Przykładowy produkt ze sklepu',
      rating: Math.floor(Math.random() * 2) + 3,
      reviewsAmount: Math.floor(Math.random() * 2) + 3,
      price: Math.floor(Math.random() * 100) + 100,
      priceCurrency: 'zł',
      shortDescription: `
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Vestibulum tortor quam,
        feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
        eu libero sit amet quam egestas semper. Aenean ultricies mi vitae
        est. Mauris placerat eleifend leo.
      `,
      brand: [
        'Bosser',
        'Mossaco',
        'Black Cobiano'
      ][Math.floor(Math.random() * 4)],
      origin: [
        'Stany Zjednocznone',
        'Polska',
        'Niemcy'
      ][Math.floor(Math.random() * 4)],
      stockAmount: Math.floor(Math.random() * 100) + 100,
    };

  }

}
