import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {EShopCategory, ICartData, ICartProduct} from './cart-store.service.models';
import {map} from 'rxjs/operators';

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
        id: i + 1,
        category: [
          EShopCategory.Accessories,
          EShopCategory.CarParts,
          EShopCategory.Tires,
          EShopCategory.Wheels,
        ][Math.floor(Math.random() * 4)],
        displayName: `Przykładowy produkt testowy ${i + 1}`,
        imageSrc: `assets/images/products/product${i % 8 + 1}.png`,
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

    return this._cartData.asObservable().pipe(map(v => ({
      sum: v.sum,
      sumCurrency: v.sumCurrency,
      products: v.products.map(p => ({
        id: p.id,
        category: p.category,
        displayName: p.displayName,
        imageSrc: p.imageSrc,
        price: p.price,
        priceCurrency: p.priceCurrency,
        amount: p.amount
      }))
    })));

  }

  /**
   * Updates product in store
   * @param product Product to update with new data
   */
  public updateProduct(product: Partial<ICartProduct> & Pick<ICartProduct, 'id'>): void {

    // Getting current value
    const {value} = this._cartData;

    // Update product
    Object.assign(
      value.products.find(v => v.id === product.id),
      product
    );

    // Recalculate sum
    this._recalculateSum();

  }

  /**
   * Removes product
   * @param id Product id to remove
   */
  public removeProduct(id: ICartProduct['id']): void {

    // Getting current value
    const {value} = this._cartData;

    // Filtering products
    value.products = value.products.filter(v => v.id !== id);

    // Recalculate sum
    this._recalculateSum();

  }

}
