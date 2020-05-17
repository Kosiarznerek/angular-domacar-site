import {Component, OnInit} from '@angular/core';
import {ICartProduct} from '../../../cart-store.service.models';
import {Observable} from 'rxjs';
import {CartStoreService} from '../../../cart-store.service';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // Component data
  public readonly cartProducts$: Observable<ICartProduct[]>;

  constructor(
    private _cartStoreService: CartStoreService,
  ) {

    // Setting cart data
    this.cartProducts$ = this._cartStoreService.data.pipe(
      shareReplay()
    );

  }

  ngOnInit(): void {
  }

  /**
   * Executes on product remove button click
   * @param event Event target
   * @param product Product to remove
   */
  public onProductRemoveClick(event: MouseEvent, product: ICartProduct): void {

    // Prevent default
    event.preventDefault();

    // Remove
    this._cartStoreService.removeProduct(product.id);

  }

  /**
   * Track by function to ngFor
   * @param index Product index
   * @param item Product
   */
  public trackCartItemBy(index: number, item: ICartProduct): number {

    return item.id;

  }

}
