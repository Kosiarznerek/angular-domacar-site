import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ICartProduct} from '../../cart-store.service.models';
import {CartStoreService} from '../../cart-store.service';
import {shareReplay} from 'rxjs/operators';

@Component({
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  // Component data
  public readonly cartProducts$: Observable<ICartProduct[]>;

  constructor(
    private readonly _cartStoreService: CartStoreService,
  ) {

    // Getting cart data
    this.cartProducts$ = this._cartStoreService.data.pipe(
      shareReplay()
    );

  }

  ngOnInit(): void {
  }

  /**
   * Track by function to for look
   * @param index Element index
   * @param product Product
   */
  public trackProductBy(index: number, product: ICartProduct): any {

    return product.id;

  }

  /**
   * Executes when product amount has changed
   * @param event Event target
   * @param product Product to update
   */
  public onProductAmountUpdate(event: Event, product: ICartProduct) {

    // Extract amount and product id
    const input: HTMLInputElement = event.target as HTMLInputElement;
    const amount: number = +input.value;
    const {id} = product;

    // Update
    this._cartStoreService.setProductAmount(id, amount);

  }

  /**
   * Executes on product remove button click
   * @param event Event target
   * @param product Product to remove
   */
  public onProductRemoveClick(event: Event, product: ICartProduct): void {

    // Prevent default
    event.preventDefault();

    // Remove
    this._cartStoreService.removeProduct(product.id);

  }

}
