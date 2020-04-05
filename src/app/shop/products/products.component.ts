import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, take} from 'rxjs/operators';
import {EShopCategory} from '../../cart-store.service.models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  public async ngOnInit(): Promise<void> {

    // Extract shop category
    const shopCategory: EShopCategory = await this._activatedRoute.parent.parent.url.pipe(
      map(v => v[0].path as EShopCategory),
      take(1)
    ).toPromise();

  }

}
