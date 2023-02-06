import { User } from './User.model';

export interface RecipeModel {
  recipe: {
    id: number;
    name: string;
    description: string;
    hours: number;
    minutes: number;
    region: string;
    category: string;
    complexity: string;
    ingredients: Array<string>;
    steps: Array<string>;
    rating: {
      id: number;
      rating: number;
      votesNumber: number;
    };
    user: User;
  };
  photo: string;
  video: string;
}
