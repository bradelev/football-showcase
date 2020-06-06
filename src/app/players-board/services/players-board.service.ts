import { Injectable } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Players } from '../models/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersBoardService {

  constructor(private httpService: HttpService) { }

  getAll<T>(endpoint: string, options?: T): Observable<Players[]> {
    return this.httpService.getAll(endpoint, options)
  }
}
