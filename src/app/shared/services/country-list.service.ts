import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {
  countryListUrl = '../assets/misc/countries.json';

  constructor(private http: HttpClient) { }

  getAllCountries() {
    return this.http.get(this.countryListUrl);
  }

  getAbbreviation(countryName) {
    return this.getAllCountries().pipe(
      map(countriesObj => Object.keys(countriesObj).find(key => countriesObj[key] === countryName))
    )
  }

}
