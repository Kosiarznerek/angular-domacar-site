// Cart data interface
export interface ICartData {
  sum: number;
  sumCurrency: string;
  products: ICartProduct[];
}

// Cart product interface
export interface ICartProduct {
  id: number;
  category: EShopCategory;
  displayName: string;
  imageSrc: string;
  price: number;
  priceCurrency: string;
  amount: number;
}

// Shop category enum
export enum EShopCategory {
  CarParts = 'car-parts',
  Wheels = 'wheels',
  Tires = 'tires',
  Accessories = 'accessories'
}
