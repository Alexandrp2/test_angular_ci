import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateService } from '../main/shared/date/date.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

describe('UserComponent with spy', () => {

  it('should call getDate() only once and only when call the method', () => {
    // Arrange
    //var date = new Date();
    const dateService = jasmine.createSpyObj(DateService, ["getDate"]);
    const component = new UserComponent(dateService);
    
    // Alternative to return a mock
    const dateService1 = new DateService();
    spyOn(dateService1, 'getDate');//.and.returnValue(Observable.of())
    const component1 = new UserComponent(dateService1);
    
    // Act
    expect(dateService.getDate).toHaveBeenCalledTimes(0);
    expect(dateService1.getDate).toHaveBeenCalledTimes(0);
    
    dateService.getDate()//dateService.getDate.and.return(date);
    dateService1.getDate();


    // Assert
    expect(dateService.getDate).toHaveBeenCalledTimes(1);
    expect(dateService1.getDate).toHaveBeenCalledTimes(1);
  });

  
});
