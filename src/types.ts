export interface RepositoryFull {
  id: string;
  name: string;
  ownerName: string;
  createdAt: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
  reviews?: {
    edges: Array<{
      node: Review
    }>
  }
}

export type Repository = Omit<RepositoryFull,
  'name'
  | 'ownerName'
  | 'createdAt'
>;

export interface Review {
  id: string;
  text: string;
  rating: number;
  createdAt: string;
  user: {
    id: string;
    username: string;
  }
}