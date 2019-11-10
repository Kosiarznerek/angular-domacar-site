import {Component, OnInit} from '@angular/core';
import {TNavbarItem} from './navbar-top.component.models';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  // Component data
  public isMenuToggledUp: boolean;
  public readonly menuItems: TNavbarItem[];

  constructor() {

    // Initialize menu
    this.isMenuToggledUp = true;
    this.menuItems = [
      {
        displayName: 'Główna',
        href: '/',
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
        href: '#'
      },
      {
        displayName: 'Kontakt',
        href: '#'
      }
    ];

  }

  ngOnInit() {
  }

}
