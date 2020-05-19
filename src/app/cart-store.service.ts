import {Injectable} from '@angular/core';
import {BehaviorSubject, merge, Observable, of} from 'rxjs';
import {EShopCategory, ICartProduct, ICartProductDto, ICartStorageProduct} from './cart-store.service.models';
import {delay, filter, map, switchMap, tap} from 'rxjs/operators';

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

    return merge(
      this._cartProducts$.asObservable(), // products with loaded and unloaded content
      this._cartProducts$.asObservable().pipe(
        map(cartProducts => cartProducts.filter((v: ICartProduct) => !v.contentLoaded)), // products with unloaded content
        filter(notLoadedProducts => notLoadedProducts.length > 0),
        switchMap(notLoadedProducts => this._getProductsDetails(notLoadedProducts).pipe( // getting details for each unloaded products
          map(details => this._cartProducts$.value
            .filter((cartProduct: ICartProduct) => { // from current cart remove products with not found details
              return cartProduct.contentLoaded || details.find(v => v.id === cartProduct.id) !== undefined;
            })
            .map((product: ICartProduct) => {
              if (product.contentLoaded) { // product with loaded content -> return product
                return product;
              } else { // assign to product data from storage details
                return Object.assign(
                  product,
                  details.find(v => v.id === product.id),
                  {contentLoaded: true}
                );
              }
            })
          ),
        )),
        tap(v => {
          this._cartProducts$.next(v);
          CartStoreService._LocalStorage = v;
        })
      ),
    ).pipe(map((v: ICartProduct[]) => v.map(p => ({ // map items to ICartProduct
      id: p.id,
      amount: p.amount,
      contentLoaded: p.contentLoaded || false,
      category: p.category,
      displayName: p.displayName,
      imageSrc: p.imageSrc,
      price: p.price,
    }))));

  }

  /**
   * Gets products sum
   */
  public get productsSum(): Observable<number> {

    return this._cartProducts$.pipe(
      map(v => v.find((p: ICartProduct) => !p.contentLoaded)
        ? null
        : v.reduce((p: number, c: ICartProduct) => p += c.amount * c.price, 0)
      )
    );

  }

  /**
   * Gets total products amount
   */
  public get productsAmount(): Observable<number> {

    return this._cartProducts$.pipe(
      map(v => v.reduce((p: number, c: ICartProduct) => p += c.amount, 0))
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
      delay(3_000)
    );

  }

}
