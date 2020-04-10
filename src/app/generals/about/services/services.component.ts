import {Component, OnInit} from '@angular/core';
import {IServiceDetails} from './services.component.models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // Component data
  public readonly servicesDetails: IServiceDetails[];

  constructor() {

    // Initialize service product-details
    this.servicesDetails = [
      {
        iconName: 'fas fa-tachometer-alt',
        title: 'Szybkość usług',
        description: 'Aliquam finibus elit risus, a malesuada odio ornare vitae. Fusce placerat enim eu mi iaculis ornare roin aliquet.'
      },
      {
        iconName: 'fas fa-users',
        title: 'Doświadczony zespół',
        description: 'Aenean pulvinar malesuada turpis, vitae elementum turpis commodo et. Curabitur nec sem. Donec ac elementum massa.'
      },
      {
        iconName: 'fas fa-wallet',
        title: 'Niskie ceny',
        description: 'Praesent ut ultrices lorem. Ut sed felis eu ante porta varius. Nullam eu  viverra tincidunt. Morbi nec nunc augue.'
      },
      {
        iconName: 'fas fa-city',
        title: 'Sprawdzeni dostawcy',
        description: 'Cras libero ex, auctor a tristique pulvinar, aliquam et purus. Vestibulum lobortis urna vel elit tincidunt quis.'
      },
      {
        iconName: 'fas fa-hands-helping',
        title: 'Błyskawiczna dostawa',
        description: 'Morbi vitae interdum magna, vel convallis tortor. Duis laoreet viverra viverra. Nulla nibh nisl, venenatis lacinia.'
      },
      {
        iconName: 'fas fa-award',
        title: 'Wysoka jakość',
        description: 'Vestibulum consectetur ultrices felis. Sed auctor cursus mi, sit amet maximus sapien scelerisque nec nullam.'
      },
    ];

  }

  ngOnInit(): void {
  }

}
