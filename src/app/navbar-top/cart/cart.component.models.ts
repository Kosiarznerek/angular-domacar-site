// Cart data interface
export interface ICartData {
  sum: number;
  sumCurrency: string;
  products: Array<{
    displayName: string;
    imageSrc: string;
    price: number;
    priceCurrency: string;
    amount: number;
  }>;
}
