import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ICartData} from '../../cart-store.service.models';
import {CartStoreService} from '../../cart-store.service';

@Component({
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  // Component data
  public readonly cartData$: Observable<ICartData>;

  constructor(
    private readonly _cartStoreService: CartStoreService,
  ) {

    // Getting cart data
    this.cartData$ = this._cartStoreService.data;

  }

  ngOnInit(): void {
  }

}
