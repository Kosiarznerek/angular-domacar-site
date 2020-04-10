import {Component, OnInit} from '@angular/core';
import {EFilterType} from './search-wheels.component.models';

@Component({
  selector: 'app-search-wheels',
  templateUrl: './search-wheels.component.html',
  styleUrls: ['./search-wheels.component.scss']
})
export class SearchWheelsComponent implements OnInit {

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
