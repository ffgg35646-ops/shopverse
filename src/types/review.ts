export interface Review {
  id: number;

  userName: string;
  userAvatar: string;

  rating: 1 | 2 | 3 | 4 | 5;

  title: string;
  comment: string;

  verifiedPurchase: boolean;

  likes: number;

  createdAt: string;
}
