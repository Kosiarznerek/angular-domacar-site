import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICartData} from './cart-store.service.models';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  // Service data
  private readonly _cartData: BehaviorSubject<ICartData>;

  constructor() {

    // Create cart data
    this._cartData = new BehaviorSubject<ICartData>({
      sum: null,
      sumCurrency: 'zł',
      products: new Array(3).fill(0).map((v, i) => ({
        displayName: `Przykładowy produkt testowy ${i + 1}`,
        imageSrc: `../../../assets/images/products/product${i % 8 + 1}.png`,
        price: Math.floor(Math.random() * 1000) + 100,
        priceCurrency: 'zł',
        amount: Math.floor(Math.random() * 10) + 10
      }))
    });

    // Recalculate sum
    this._recalculateSum();

  }

  /**
   * Recalculates sum of current data
   */
  private _recalculateSum(): void {

    // Getting current value
    const {value} = this._cartData;

    // Setting sum
    value.sum = value.products
      .map(v => v.amount * v.price)
      .reduce((p, c) => p += c, 0);

    // Emit new value
    this._cartData.next(value);

  }

  /**
   * Gets cart data
   */
  public get data(): Observable<ICartData> {

    return this._cartData.asObservable();

  }

}
