import {Component, OnInit} from '@angular/core';
import {IPaginatorState} from './product-paginator.component.models';

@Component({
  selector: 'app-product-paginator',
  templateUrl: './product-paginator.component.html',
  styleUrls: ['./product-paginator.component.scss']
})
export class ProductPaginatorComponent implements OnInit {

  // Component data
  public readonly paginatorState: IPaginatorState;

  constructor() {

    // Create mocked product-paginator state
    this.paginatorState = {
      currentPage: 1,
      totalPages: 10
    };

  }

  ngOnInit(): void {
  }

  /**
   * Gets buttons for pages change
   */
  public get pagesList(): number[] {

    const {currentPage, totalPages} = this.paginatorState;

    let rangeA = currentPage - 2 > 0 ? currentPage - 2 : 1;
    let rangeB = currentPage + 2 <= totalPages ? currentPage + 2 : totalPages;

    rangeA -= rangeB - rangeA !== 4 ? 4 - (rangeB - rangeA) : 0;
    rangeA = rangeA < 1 ? 1 : rangeA;

    rangeB += rangeB - rangeA !== 4 ? 4 - (rangeB - rangeA) : 0;
    rangeB = rangeB > totalPages ? totalPages : rangeB;

    return new Array(5)
      .fill(0)
      .map((v, i) => rangeA + i)
      .filter(v => v <= rangeB);

  }

  /**
   * Sets new current page
   * @param newCurrentPage New current page
   */
  public onPageChange(newCurrentPage: number): void {

    this.paginatorState.currentPage = newCurrentPage;

  }
}
