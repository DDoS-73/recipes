export interface Response<T> {
  result: T;
}

export interface RecipesResponse<T> {
  page: {
    content: T;
  };
}
