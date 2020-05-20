import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CartStoreService} from '../../cart-store.service';
import {Observable} from 'rxjs';
import {ICartProduct} from '../../cart-store.service.models';
import {shareReplay} from 'rxjs/operators';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  // Component data
  public readonly cartProducts$: Observable<ICartProduct[]>;
  public readonly cartProductsSum$: Observable<number>;
  public readonly form: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _cartStoreService: CartStoreService,
  ) {

    // Getting cart data
    this.cartProducts$ = this._cartStoreService.data.pipe(
      shareReplay()
    );
    this.cartProductsSum$ = this._cartStoreService.productsSum.pipe(
      shareReplay()
    );

    // Create empty form
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      postcode: ['', Validators.required],
      additionalInfo: ['']
    });

  }

  ngOnInit(): void {
  }

}
