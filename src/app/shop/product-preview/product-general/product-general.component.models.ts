// Products product-general information interface
export interface IProductsGenerals {
  id: number;
  displayName: string;
  rating: number; // 0-5
  reviewsAmount: number;
  price: number;
  shortDescription: string;
  brand: string;
  origin: string;
  stockAmount: number;
}
