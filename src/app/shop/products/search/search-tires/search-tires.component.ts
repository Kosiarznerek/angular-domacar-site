import {Component, OnInit} from '@angular/core';
import {EFilterType} from './search-tires.component.models';

@Component({
  selector: 'app-search-tires',
  templateUrl: './search-tires.component.html',
  styleUrls: ['./search-tires.component.scss']
})
export class SearchTiresComponent implements OnInit {

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
