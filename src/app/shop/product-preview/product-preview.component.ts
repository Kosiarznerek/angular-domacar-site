import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ShopCategory} from '../shop.module.models';
import {map, take} from 'rxjs/operators';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {
  }

  public async ngOnInit(): Promise<void> {

    // Extract shop category
    const shopCategory: ShopCategory = await this._activatedRoute.parent.parent.url.pipe(
      map(v => v[0].path as ShopCategory),
      take(1)
    ).toPromise();

  }

}
