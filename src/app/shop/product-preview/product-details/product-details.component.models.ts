// Details tab enum,
export enum EDetailsTab {
  Description,
  AdditionalInformation,
  Reviews
}

// Product product-details interface
export interface IProductDetails {
  description: string;
  additionalInformation: string;
  reviews: IProductReview[];
}

// Product review interface
export interface IProductReview {
  authorName: string;
  content: string;
  rating: number; // 0-5
  publishedDate: Date;
}
