import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EShopCategory} from '../../../cart-store.service.models';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IProduct} from './list.component.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // Component data
  public shopCategory$: Observable<EShopCategory>;
  public readonly productsList: IProduct[];

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {

    // Initialize products list
    this.productsList = new Array(8).fill(0).map((v, i) => ({
      id: i + 1,
      category: [
        EShopCategory.Accessories,
        EShopCategory.CarParts,
        EShopCategory.Tires,
        EShopCategory.Wheels,
      ][Math.floor(Math.random() * 4)],
      displayName: [
        'Przykładowy produkt ze sklepu',
        'Przykładowy produkt ze sklepu o bardzo długiej nazwie',
      ][Math.floor(Math.random() * 2)],
      rating: Math.floor(Math.random() * 2) + 3,
      price: Math.floor(Math.random() * 100) + 100,
      priceCurrency: 'zł',
      imgSrc: `../../../assets/images/products/product${i + 1}.png`
    }));

  }

  public ngOnInit(): void {

    // Extract shop category
    this.shopCategory$ = this._activatedRoute.parent.parent.url.pipe(
      map(v => v[0].path as EShopCategory),
    );

  }

}
