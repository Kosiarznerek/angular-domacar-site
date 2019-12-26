// Product model interface
export interface IProduct {
  displayName: string;
  rating: number; // 0-5
  price: number;
  priceCurrency: string;
  category: string;
  imgSrc: string;
}
