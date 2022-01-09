import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  dateVariable: Date = new Date();

  constructor() { }

  getDate(): Date {
    return new Date();
  }
}
