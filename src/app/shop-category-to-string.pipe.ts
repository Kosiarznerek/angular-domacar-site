import {Pipe, PipeTransform} from '@angular/core';
import {EShopCategory} from './cart-store.service.models';

@Pipe({
  name: 'shopCategoryToString'
})
export class ShopCategoryToStringPipe implements PipeTransform {

  public transform(value: EShopCategory): string {
    return ShopCategoryToStringPipe.Transform(value);
  }

  /**
   * Converts shop category enum to string value
   * @param value Value to parse
   */
  public static Transform(value: EShopCategory): string {

    switch (value) {
      case EShopCategory.CarParts:
        return 'Części samochodowe';
      case EShopCategory.Wheels:
        return 'Felgi';
      case EShopCategory.Tires:
        return 'Opony';
      case EShopCategory.Accessories:
        return 'Akcesoria';
    }

  }

}
