import {EShopCategory} from '../../cart-store.service.models';

// Product model interface
export interface IProduct {
  id: number;
  category: EShopCategory;
  displayName: string;
  rating: number; // 0-5
  price: number;
  priceCurrency: string;
  imgSrc: string;
}
