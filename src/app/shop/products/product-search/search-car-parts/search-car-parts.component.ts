import {Component, OnInit} from '@angular/core';
import {EFilterType} from './search-car-parts.component.models';

@Component({
  selector: 'app-search-car-parts',
  templateUrl: './search-car-parts.component.html',
  styleUrls: ['./search-car-parts.component.scss'],
})
export class SearchCarPartsComponent implements OnInit {

  // Component data
  public activeFilterType: EFilterType;

  // Simple getter
  public EFilterType = EFilterType;

  constructor() {
  }

  ngOnInit(): void {

    // Setting active filter type
    this.activeFilterType = EFilterType.ByVehicle;

  }

}
