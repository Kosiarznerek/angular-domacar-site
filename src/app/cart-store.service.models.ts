// Cart data interface
export interface ICartData {
  sum: number;
  sumCurrency: string;
  products: ICartProduct[];
}

// Cart product interface
export interface ICartProduct {
  id: number;
  displayName: string;
  imageSrc: string;
  price: number;
  priceCurrency: string;
  amount: number;
}
