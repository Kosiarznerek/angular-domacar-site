import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CartStoreService} from '../cart-store.service';
import {filter, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartResolver implements Resolve<boolean> {

  constructor(
    private readonly _cartStoreService: CartStoreService
  ) {
  }

  /**
   * Resolves when each product in cart has loaded content
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this._cartStoreService.data.pipe(
      filter(v => !v.find(p => !p.contentLoaded)),
      map(() => true),
      take(1)
    );

  }

}
