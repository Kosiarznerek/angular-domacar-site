// Cart storage product interface
export interface ICartStorageProduct {
  id: number;
  amount: number;
}

// Cart product dto
export interface ICartProductDto {
  id: number;
  category: EShopCategory;
  displayName: string;
  imageSrc: string;
  price: number;
}

// Cart product interface
export interface ICartProduct extends ICartStorageProduct, ICartProductDto {
  contentLoaded: boolean;
}

// Shop category enum
export enum EShopCategory {
  CarParts = 'car-parts',
  Wheels = 'wheels',
  Tires = 'tires',
  Accessories = 'accessories'
}
