import {Component, OnInit} from '@angular/core';
import {INavbarItem, TNavbarItem} from './navbar-top.component.models';
import {animate, style, transition, trigger} from '@angular/animations';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const SLIDE_UP_DOWN_TIMING = 250;

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
  public isMenuToggledUp: boolean;
  public readonly menuItems: TNavbarItem[];
  public readonly isMobile$: Observable<boolean>;

  public isCartListToggledUp: boolean;

  constructor(
    private readonly _breakpointObserver: BreakpointObserver
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
            href: '#'
          },
          {
            displayName: 'Opony',
            href: '#'
          },
          {
            displayName: 'Felgi',
            href: '#'
          },
          {
            displayName: 'Akcesoria',
            href: '#'
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
    this.isMobile$ = this._breakpointObserver.observe(['(min-width: 960px)']).pipe(
      map(v => !v.matches)
    );

    // Initialize cart menu
    this.isCartListToggledUp = true;

  }

  ngOnInit() {
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