import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EShopCategory} from '../../../cart-store.service.models';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // Component data
  public shopCategory$: Observable<EShopCategory>;

  // Simple getters
  public EShopCategory = EShopCategory;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {

    // Extract shop category
    this.shopCategory$ = this._activatedRoute.parent.parent.url.pipe(
      map(v => v[0].path as EShopCategory),
    );

  }

}
