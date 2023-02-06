import axios, { AxiosStatic, AxiosRequestConfig, AxiosHeaders, AxiosError } from 'axios';
import { REACT_APP_SERVER_URL } from '../const/app-keys.const';
import { toast } from 'react-toastify';

class HttpService {
  private readonly baseUrl: string;

  fetchingService: AxiosStatic;

  private readonly apiVersion: string;

  constructor(baseUrl = REACT_APP_SERVER_URL, fetchingService = axios, apiVersion = 'api/v1') {
    this.baseUrl = baseUrl || '';
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
    this.fetchingService.defaults.headers.common = { Authorization: localStorage.getItem('token') };
    this.fetchingService.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error: AxiosError<{ detail: string }>) {
        console.log(error?.response?.data?.detail);
        toast.error(error?.response?.data?.detail, {
          autoClose: 2000,
          toastId: 'customId'
        });
        return Promise.reject(error);
      }
    );
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: AxiosRequestConfig) {
    return configWithoutDataAndUrl;
  }

  get<T>(config: AxiosRequestConfig<T>) {
    return this.fetchingService.get<T>(
      this.getFullApiUrl(config.url || ''),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post<T>(config: AxiosRequestConfig) {
    return this.fetchingService.post<T>(
      this.getFullApiUrl(config.url || ''),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  // delete<T>(config: AxiosRequestConfig<T>, withAuth = true) {
  //   if (withAuth) {
  //     this.populateTokenToHeaderConfig(config);
  //   }
  //   return this.fetchingService.delete<T>(
  //     this.getFullApiUrl(config.url || ''),
  //     this.extractUrlAndDataFromConfig(config)
  //   );
  // }

  // put<T>(config: AxiosRequestConfig, withAuth = true) {
  //   if (withAuth) {
  //     this.populateTokenToHeaderConfig(config);
  //   }
  //   return this.fetchingService.put<T>(
  //     this.getFullApiUrl(config.url || ''),
  //     config.data,
  //     this.extractUrlAndDataFromConfig(config)
  //   );
  // }
}

export default HttpService;
