import HttpService from '../../common/services/http.service';
import { Response } from '../../common/types/response.type';
import { BACKEND_KEYS } from '../../common/const/app-keys.const';

class RecipeService extends HttpService {
  createRecipe = (data: { [field: string]: any }) =>
    this.post<Response<{}>>({
      url: BACKEND_KEYS.RECIPES,
      data: data,
      headers: {
        'Content-Type': undefined
      }
    });
}

export default new RecipeService();
