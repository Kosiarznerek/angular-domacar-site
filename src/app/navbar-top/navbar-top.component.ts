import {Component, OnInit} from '@angular/core';
import {TNavbarItem} from './navbar-top.component.models';
import {animate, style, transition, trigger} from '@angular/animations';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss'],
  animations: [
    trigger('slideUpDown', [
      transition('void => *', [
        style({height: 0, margin: 0, padding: 0}),
        animate(250, style({height: '*', margin: '*', padding: '*'}))
      ]),
      transition('* => void', [
        style({height: '*', margin: '*', padding: '*'}),
        animate(250, style({height: 0, margin: 0, padding: 0}))
      ])
    ])
  ]
})
export class NavbarTopComponent implements OnInit {

  // Component data
  public isMenuToggledUp: boolean;
  public readonly menuItems: TNavbarItem[];
  public readonly isMobile$: Observable<boolean>;

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

  }

  ngOnInit() {
  }

}
