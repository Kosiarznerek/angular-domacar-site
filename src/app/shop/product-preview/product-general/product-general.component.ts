import {Component, OnInit} from '@angular/core';
import {IProductsGenerals} from './product-general.component.models';
import {CartStoreService} from '../../../cart-store.service';

@Component({
  selector: 'app-product-general',
  templateUrl: './product-general.component.html',
  styleUrls: ['./product-general.component.scss']
})
export class ProductGeneralComponent implements OnInit {

  // Component data
  public productsGenerals: IProductsGenerals;

  constructor(
    private readonly _cartStoreService: CartStoreService,
  ) {
  }

  ngOnInit(): void {

    // Create mocked data
    this.productsGenerals = {
      id: Math.floor(Math.random() * 10) + 1,
      displayName: 'Przykładowy produkt ze sklepu',
      rating: Math.floor(Math.random() * 2) + 3,
      reviewsAmount: Math.floor(Math.random() * 2) + 3,
      price: Math.floor(Math.random() * 100) + 100,
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
      ][Math.floor(Math.random() * 3)],
      origin: [
        'Stany Zjednocznone',
        'Polska',
        'Niemcy'
      ][Math.floor(Math.random() * 3)],
      stockAmount: Math.floor(Math.random() * 100) + 100,
    };

  }

  /**
   * Executes when add to cart button was clicked
   * @param amount Product amount to add
   */
  public onAddToCartClick(amount: number): void {

    this._cartStoreService.addProduct(this.productsGenerals.id, amount);

  }

}
