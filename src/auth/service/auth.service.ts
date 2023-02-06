import HttpService from '../../common/services/http.service';
import { Response } from '../../common/types/response.type';
import { BACKEND_KEYS } from '../../common/const/app-keys.const';

class AuthService extends HttpService {
  register = (data: { [field: string]: any }) =>
    this.post<Response<{}>>({
      url: BACKEND_KEYS.REGISTER,
      data: data
    });

  login = (data: { [field: string]: any }, moderator = false) =>
    this.post<{ accessToken: string }>({
      url: BACKEND_KEYS.LOGIN,
      data: data
    });
}

export default new AuthService();
