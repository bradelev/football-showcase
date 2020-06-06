import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PositionFieldService {

  constructor() { }

  getPositionKey(position: string): string {
    
    return position;
  }
}
