import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {bufferCount, filter, map, shareReplay, switchMap} from 'rxjs/operators';
import {merge, Observable, of} from 'rxjs';
import {EShopCategory} from '../cart-store.service.models';
import {ShopCategoryToStringPipe} from '../shop-category-to-string.pipe';

@Component({
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  // Component data
  public breadcrumbs$: Observable<string[]>;

  constructor(
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  public async ngOnInit(): Promise<void> {

    // Get sub route path
    const subRoutePath$: Observable<string> = merge(
      of(1),
      this._router.events.pipe(
        filter(v => v instanceof NavigationEnd)
      )
    ).pipe(
      switchMap(() => this._activatedRoute.pathFromRoot),
      switchMap(v => v.url),
      bufferCount(this._activatedRoute.pathFromRoot.length),
      map(v => v.map(u => u.join('/')).join('/')),
      map(pathFromRoot => this._router.url.split(pathFromRoot)[1])
    );

    // Getting breadcrumbs
    this.breadcrumbs$ = subRoutePath$.pipe(
      map(path => ShopComponent._GetBreadcrumbsDisplayName(path)),
      shareReplay()
    );

  }

  /**
   * Creates breadcrumbs based on sub route path
   * @param subRoutePath Current sub route
   */
  private static _GetBreadcrumbsDisplayName(subRoutePath: string): string[] {

    // Extract shop category
    const shopCategory: EShopCategory = subRoutePath.split('/')[0] as EShopCategory;

    // Getting shop category display name
    const shopCategoryDisplayName: string = ShopCategoryToStringPipe.Transform(shopCategory);

    // Extract sub route
    const subRoute: string = subRoutePath.split(`${shopCategory}/`)[1].split('/')[0];

    // Getting sub route display name
    let subRouteDisplayName: string;
    switch (subRoute) {
      case 'products':
        subRouteDisplayName = 'Lista produktów';
        break;
      case 'product-preview':
        subRouteDisplayName = 'Podgląd produktu';
        break;
    }

    // Return statement
    return [shopCategoryDisplayName, subRouteDisplayName];

  }

}
