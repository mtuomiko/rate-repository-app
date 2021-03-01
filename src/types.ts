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
}

export type Repository = Omit<RepositoryFull,
  'name'
  | 'ownerName'
  | 'createdAt'
>;
