import {EShopCategory} from '../../../cart-store.service.models';

// Related product model interface
export interface IRelatedProduct {
  id: number;
  category: EShopCategory;
  displayName: string;
  rating: number; // 0-5
  price: number;
  priceCurrency: string;
  imgSrc: string;
}
