import {Component, OnInit} from '@angular/core';
import {INavbarItem, TNavbarItem} from './navbar-top.component.models';
import {animate, style, transition, trigger} from '@angular/animations';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {filter, map, shareReplay} from 'rxjs/operators';
import {EShopCategory} from '../../cart-store.service.models';
import {NavigationEnd, Router} from '@angular/router';
import {CartStoreService} from '../../cart-store.service';

const SLIDE_UP_DOWN_TIMING = 150;

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss'],
  animations: [
    trigger('slideUpDown', [
      transition('void => *', [
        style({height: 0, margin: 0, padding: 0}),
        animate(SLIDE_UP_DOWN_TIMING, style({height: '*', margin: '*', padding: '*'}))
      ]),
      transition('* => void', [
        style({height: '*', margin: '*', padding: '*'}),
        animate(SLIDE_UP_DOWN_TIMING, style({height: 0, margin: 0, padding: 0}))
      ])
    ])
  ]
})
export class NavbarTopComponent implements OnInit {

  // Component data
  public readonly menuItems: TNavbarItem[];
  public readonly isMobile$: Observable<boolean>;

  public isMenuToggledUp: boolean;
  public isCartListToggledUp: boolean;

  public readonly cartProductsAmount$: Observable<number>;

  constructor(
    private readonly _router: Router,
    private readonly _breakpointObserver: BreakpointObserver,
    private readonly _cartStoreService: CartStoreService,
  ) {

    // Initialize menu
    this.isMenuToggledUp = true;
    this.menuItems = [
      {
        displayName: 'Główna',
        href: '/home',
      },
      {
        displayName: 'Sklep',
        children: [
          {
            displayName: 'Części samochodowe',
            href: `/shop/${EShopCategory.CarParts}`
          },
          {
            displayName: 'Opony',
            href: `/shop/${EShopCategory.Tires}`
          },
          {
            displayName: 'Felgi',
            href: `/shop/${EShopCategory.Wheels}`
          },
          {
            displayName: 'Akcesoria',
            href: `/shop/${EShopCategory.Accessories}`
          }
        ]
      },
      {
        displayName: 'O nas',
        href: '/generals/about'
      },
      {
        displayName: 'Kontakt',
        href: '/generals/contact'
      }
    ];

    // Add mobile breakpoint
    this.isMobile$ = this._breakpointObserver.observe(['(max-width: 991px)']).pipe(
      map(v => v.matches),
      shareReplay(),
    );

    // Initialize cart menu
    this.isCartListToggledUp = true;

    // Initialize cart products amount
    this.cartProductsAmount$ = this._cartStoreService.productsAmount.pipe(
      shareReplay()
    );

  }

  ngOnInit(): void {

    // Subscribe to mobile
    this.isMobile$.subscribe(isMobile => {
      this._toggleUpNavigation();
    });

    // Subscribe to route change
    this._router.events.pipe(
      filter(v => v instanceof NavigationEnd)
    ).subscribe(() => {
      this._toggleUpNavigation();
    });

  }

  /**
   * Toggles up cart and navigation menu
   */
  public _toggleUpNavigation(): void {

    // Hide cart
    this.isCartListToggledUp = true;

    // Hide menu with all submenus
    this.menuItems
      .filter((v: INavbarItem) => typeof v.isExpanded === 'boolean')
      .forEach((v: INavbarItem) => v.isExpanded = false);
    this.isMenuToggledUp = true;

  }

  /**
   * Executes when menu icon has been clicked
   */
  public async onMenuIconClick(): Promise<void> {

    // Hide all submenu
    if (!this.isMenuToggledUp) {
      this.menuItems
        .filter((v: INavbarItem) => typeof v.isExpanded === 'boolean')
        .forEach((v: INavbarItem) => v.isExpanded = false);
    }

    // Hide cart if visible
    if (!this.isCartListToggledUp) {
      this.isCartListToggledUp = true;
      await new Promise(r => setTimeout(r, SLIDE_UP_DOWN_TIMING));
      this.isMenuToggledUp = false;
      return;
    }

    // Toggle menu
    this.isMenuToggledUp = !this.isMenuToggledUp;

  }

  /**
   * Executes when cart icon has been clicked
   */
  public async onCartIconClick(): Promise<void> {

    // Hide menu if visible
    if (!this.isMenuToggledUp) {
      this.isMenuToggledUp = true;
      await new Promise(r => setTimeout(r, SLIDE_UP_DOWN_TIMING));
      this.isCartListToggledUp = false;
      return;
    }

    // Toggle cart
    this.isCartListToggledUp = !this.isCartListToggledUp;

  }

}
