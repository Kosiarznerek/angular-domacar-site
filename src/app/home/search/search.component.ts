import {Component, OnInit} from '@angular/core';
import {VehicleComponent} from './vehicle/vehicle.component';
import {PartsComponent} from './parts/parts.component';
import {ITabItem} from './search.component.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Component data
  public tabsList: Array<ITabItem>;

  constructor() {

    // Initialize tabs
    this.tabsList = [
      {
        displayName: 'Części do pojazdu',
        isActive: true,
        component: VehicleComponent,
      },
      {
        displayName: 'Wyszukiwarka części',
        isActive: false,
        component: PartsComponent,
      },
    ];

  }

  ngOnInit() {
  }

  /**
   * Executes when tab has been clicked
   * @param tab Clicked tab
   */
  public onTabClick(tab: ITabItem): void {

    // Unselect all tabs
    this.tabsList.forEach(v => v.isActive = false);

    // Select tab
    tab.isActive = true;

  }

}
