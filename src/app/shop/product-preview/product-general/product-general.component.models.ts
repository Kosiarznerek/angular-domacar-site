// Products product-general information interface
export interface IProductsGenerals {
  displayName: string;
  rating: number; // 0-5
  reviewsAmount: number;
  price: number;
  priceCurrency: string;
  shortDescription: string;
  brand: string;
  origin: string;
  stockAmount: number;
}
