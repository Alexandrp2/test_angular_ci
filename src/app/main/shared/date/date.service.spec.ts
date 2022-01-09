import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('dateVariable should store a date', () => {
    expect(typeof(service.dateVariable)).toBe(typeof(new Date()));
  });

  it('getDate() should return a date that is the date, hour and minute of now', () => {
    var dateNow : Date = new Date();
    var dateService = service.getDate();

    expect(typeof(dateService))
      .toBe(typeof(dateNow));
      
    expect(dateService.getDay())
    .toBe(dateNow.getDay());
    expect(dateService.getHours())
      .toBe(dateNow.getHours());
    expect(dateService.getMinutes())
      .toBe(dateNow.getMinutes());
  });



});
