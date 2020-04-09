import {Component, OnInit} from '@angular/core';
import {ICartData} from '../../../cart-store.service.models';
import {Observable} from 'rxjs';
import {CartStoreService} from '../../../cart-store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  // Component data
  public readonly cartData$: Observable<ICartData>;

  constructor(
    private _cartStoreService: CartStoreService,
  ) {

    // Setting cart data
    this.cartData$ = this._cartStoreService.data;

  }

  ngOnInit(): void {
  }

}
