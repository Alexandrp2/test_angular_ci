import { HttpClient, HttpResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApitrainComponent } from './apitrain.component';
import { Observable } from 'rxjs';

describe('ApitrainComponent', () => {
  let component: ApitrainComponent;
  let fixture: ComponentFixture<ApitrainComponent>;
  let httpController: HttpTestingController;
  let httpCLient : HttpClientTestingModule;

  beforeEach(async () => {
    //await TestBed.configureTestingModule({
    //  declarations: [ ApitrainComponent ]
    //})
    //.compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApitrainComponent],
    });
    component = TestBed.inject(ApitrainComponent);
    httpCLient = TestBed.inject(HttpClientTestingModule);
    httpController = TestBed.inject(HttpTestingController);
    //fixture = TestBed.createComponent(ApitrainComponent);
    //component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  //   // Arrange 
    // var expectedUrl =  'http://transport.opendata.ch/v1/connections?from=Lausanne&to=Genève';
  //   var mockResponse = new HttpResponse({
  //     body: {'trainNumber': 880, 'arrival': 'Geneve'},
  //     status: 200,
  //     statusText: 'OK',
  //   });
  //   //const fetchSpy = jasmine.createSpy('fetch').and.returnValue({status: 200});
  //   let data: Observable<Object> | undefined;

  //   // Act
  //   component.getTrainData().subscribe(
  //     (newData) => {
  //       data = newData;
  //     }
  //   );
    // const request = httpController.expectOne(expectedUrl);
  //   httpController.expectOne({
  //     method: 'GET',
  //     url: 'https://www.example.org'
  //   })
  //   request.flush(mockResponse.body);

  //   // Assert
  //   httpController.verify();
  //   expect(newData).toEqual(data);
  
  });
});
