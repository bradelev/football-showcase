import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Urls } from '../enums/urls.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl = Urls.API_URL;

  constructor(private http: HttpClient) { }

  public getAll<T>(endpoint: string, options?: T): Observable<any> {
    const queryParams = this.queryParamBuilder(options);
    const result =`${this.apiUrl}/${endpoint}${queryParams}`;
    return this.http.get(result);
  }

  private queryParamBuilder<T>(options?: T): string {
    let queryParams = '';
    if (options) {
      const optionsList = Object.keys(options);
      queryParams = optionsList.length ? `?${optionsList.map(key => `${key}=${options[key]}`).join('&')}` : '';
      if (!options.hasOwnProperty('_limit')) {
        queryParams += '&_limit=10';
      }
      if (!options.hasOwnProperty('_page')) {
        queryParams += '&_page=0';
      }
    }
    return queryParams;
  }
}
