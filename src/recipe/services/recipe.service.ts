import HttpService from '../../common/services/http.service';
import { RecipesResponse, Response } from '../../common/types/response.type';
import { BACKEND_KEYS } from '../../common/const/app-keys.const';
import { RecipeModel } from '../../common/models/Recipe.model';

class RecipeService extends HttpService {
  createRecipe = (data: { [field: string]: any }) =>
    this.post<Response<{}>>({
      url: BACKEND_KEYS.RECIPES,
      data: data
    });

  getRecipes = () => {
    return this.get<RecipesResponse<RecipeModel[]>>({
      url: BACKEND_KEYS.RECIPES
    }).then((res) => res.data.page.content);
  };

  getRegions = () => {
    return this.get<{ regions: string[] }>({
      url: BACKEND_KEYS.REGIONS
    }).then((res) => res.data);
  };

  getCategories = () => {
    return this.get<{ categories: string[] }>({
      url: BACKEND_KEYS.CATEGORIES
    }).then((res) => res.data);
  };

  getRecipeByID = (id: string) => {
    return this.get<RecipeModel>({
      url: BACKEND_KEYS.RECIPES + '/' + id
    }).then((res) => res.data);
  };

  filterRecipes = (parameters: { category?: string; region?: string }) => {
    console.log(parameters);
    return this.get<RecipesResponse<RecipeModel[]>>({
      url: BACKEND_KEYS.RECIPES,
      params: parameters
    }).then((res) => res.data.page.content);
  };

  getModerationRecipes = () => {
    return this.get<RecipesResponse<RecipeModel[]>>({
      url: BACKEND_KEYS.MODERATION_RECIPES
    }).then((res) => res.data.page.content);
  };

  confirmRecipe = (id: string) => {
    return this.post<Response<{}>>({
      url: BACKEND_KEYS.RECIPES + '/' + id + '/' + 'accept'
    });
  };

  rejectRecipe = (id: string) => {
    return this.post<Response<{}>>({
      url: BACKEND_KEYS.RECIPES + '/' + id + '/' + 'reject'
    });
  };

  setToken = () => {
    this.fetchingService.defaults.headers.common = { Authorization: localStorage.getItem('token') };
  };
}

export default new RecipeService();
