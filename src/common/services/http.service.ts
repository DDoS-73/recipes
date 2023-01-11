import axios, { AxiosStatic, AxiosRequestConfig, AxiosHeaders } from 'axios';
import { REACT_APP_SERVER_URL } from '../const/app-keys.const';

class HttpService {
  private readonly baseUrl: string;

  private fetchingService: AxiosStatic;

  private readonly apiVersion: string;

  constructor(baseUrl = REACT_APP_SERVER_URL, fetchingService = axios, apiVersion = 'api/v1') {
    this.baseUrl = baseUrl || '';
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig(config: AxiosRequestConfig) {
    config.headers = { ...config.headers } as AxiosHeaders;
    config.headers.set('Authorization', localStorage.getItem('token'));
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: AxiosRequestConfig) {
    return configWithoutDataAndUrl;
  }

  get<T>(config: AxiosRequestConfig<T>, withAuth = true) {
    if (withAuth) {
      this.populateTokenToHeaderConfig(config);
    }
    return this.fetchingService.get<T>(
      this.getFullApiUrl(config.url || ''),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  delete<T>(config: AxiosRequestConfig<T>, withAuth = true) {
    if (withAuth) {
      this.populateTokenToHeaderConfig(config);
    }
    return this.fetchingService.delete<T>(
      this.getFullApiUrl(config.url || ''),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post<T>(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      this.populateTokenToHeaderConfig(config);
    }
    return this.fetchingService.post<T>(
      this.getFullApiUrl(config.url || ''),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put<T>(config: AxiosRequestConfig, withAuth = true) {
    if (withAuth) {
      this.populateTokenToHeaderConfig(config);
    }
    return this.fetchingService.put<T>(
      this.getFullApiUrl(config.url || ''),
      config.data,
      this.extractUrlAndDataFromConfig(config)
    );
  }
}

export default HttpService;
