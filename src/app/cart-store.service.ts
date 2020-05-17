import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {EShopCategory, ICartProduct, ICartProductDto, ICartStorageProduct} from './cart-store.service.models';
import {delay, map, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartStoreService {

  // Service data
  private readonly _cartProducts$: BehaviorSubject<(ICartStorageProduct | ICartProduct)[]>;

  constructor() {

    // Creating cart products
    this._cartProducts$ = new BehaviorSubject(CartStoreService._LocalStorage);

  }

  /**
   * Gets cart data
   */
  public get data(): Observable<ICartProduct[]> {

    return this._cartProducts$.asObservable().pipe(
      switchMap(cartProducts => !cartProducts.map(v => CartStoreService._IsCartStorageProduct(v)).includes(true)
        ? of(cartProducts as ICartProduct[])
        : this._getProductsDetails(cartProducts.filter(v => CartStoreService._IsCartStorageProduct(v))).pipe(
          map(details => cartProducts.map(c => CartStoreService._IsCartStorageProduct(c)
            ? Object.assign({}, c, details.find(d => d.id === c.id))
            : c
          )),
          map(v => v.filter(p => !CartStoreService._IsCartStorageProduct(p))),
          tap(v => {
            this._cartProducts$.next(v);
            CartStoreService._LocalStorage = v;
          })
        )
      ),
    );

  }

  /**
   * Adds product to cart
   * @param id Product id to add
   * @param amount Product amount to add
   */
  public addProduct(id: number, amount: number): void {

    // Getting current cart value
    const currentValue = this._cartProducts$.value;

    // Finding product
    const product = currentValue.find(c => c.id === id);

    // If product found => update value
    if (product) {
      product.amount += amount;
    } else { // add new product
      currentValue.push({id, amount});
    }

    // Save to storage
    CartStoreService._LocalStorage = currentValue;

    // Emit new value
    this._cartProducts$.next(currentValue);

  }

  /**
   * Removes product from cart
   * @param id Product id to remove
   */
  public removeProduct(id: number): void {

    // Getting current cart value
    const currentValue = this._cartProducts$.value.filter(v => v.id !== id);

    // Save to storage
    CartStoreService._LocalStorage = currentValue;

    // Emit new value
    this._cartProducts$.next(currentValue);

  }

  /**
   * Sets product amount in cart
   * @param productId Product id to set amount
   * @param amount New amount
   */
  public setProductAmount(productId: number, amount: number): void {

    // Getting current cart value
    const currentValue = this._cartProducts$.value;

    // Finding product
    const product = currentValue.find(c => c.id === productId);

    // Product not found
    if (!product) {
      return;
    }

    // Increase product amount
    product.amount = amount;

    // Save to storage
    CartStoreService._LocalStorage = currentValue;

    // Emit new value
    this._cartProducts$.next(currentValue);

  }

  /**
   * Checks is product is from storage
   * @param product Product to check
   */
  private static _IsCartStorageProduct(product: any): product is ICartStorageProduct {

    return Object.keys(product || {}).length === 2 &&
      typeof product.id === 'number' &&
      typeof product.amount === 'number';

  }

  /**
   * Gets data from local storage
   */
  private static get _LocalStorage(): ICartStorageProduct[] {

    return localStorage.getItem('cartStorage')
      ? JSON.parse(localStorage.getItem('cartStorage'))
      : [];

  }

  /**
   * Sets data to local storage
   * @param products Products to set
   */
  private static set _LocalStorage(products: ICartStorageProduct[]) {

    localStorage.setItem('cartStorage', JSON.stringify(products.map(v => ({
      id: v.id,
      amount: v.amount
    }))));

  }

  /**
   * Gets products details
   * @param products Products to get details
   */
  private _getProductsDetails(products: ICartStorageProduct[]): Observable<ICartProductDto[]> {

    return of(products.map(({id}) => ({
      id,
      category: [
        EShopCategory.Accessories,
        EShopCategory.CarParts,
        EShopCategory.Tires,
        EShopCategory.Wheels,
      ][Math.floor(Math.random() * 4)],
      displayName: `Przykładowy produkt testowy ${id}`,
      imageSrc: `assets/images/products/product${Math.floor(Math.random() * 8) + 1}.png`,
      price: Math.floor(Math.random() * 1000) + 100,
    }))).pipe(
      delay(100_000)
    );

  }

}
