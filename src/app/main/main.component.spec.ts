import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isNuit should be false at beginning, and then true', () => {
      expect(component.isNuit).toBeFalse();
      component.setJourNuit();
      expect(component.isNuit).toBeTrue();
    }
  );

  it('test UI : c\est qui le patron', () => {
    // Arrange
    var textToFind: String = "C'est qui le patron ? C'est Momo le Bobo";
    var elementUnderTest = fixture.nativeElement
                                  .querySelector('p');
    // Assert
    expect(elementUnderTest.textContent)
      .toContain(textToFind);
  });

  it('test UI jour/nuit (button and text): before and after clic on button', () => {
    // component.setJourNuit();
    // Arrange
    var expectedButtonTextBeforeCLic: String = "Jour";
    var expectedButtonTextAfterCLic: String = "Nuit";
    var expectedtextBeforeCLic: String = "Il fait jour";
    var expectedtextAfterCLic: String = "Il fait nuit";

    var buttonUnderTest = fixture.debugElement
                            .nativeElement
                            .querySelector('button');
    var textJourNuitBeforeClic = fixture.debugElement // 2 alternatives to query
                                  // .nativeElement
                                  // .querySelector(".classTextButton2");
                                  .query(By.css(".classTextButton2"))
                                  .nativeElement;

    // Assert
    expect(buttonUnderTest.textContent)
      .toContain(expectedButtonTextBeforeCLic);

    // Act
    component.setJourNuit();
    fixture.detectChanges();
    var textJourNuitAfterClic = fixture.debugElement
                                  .nativeElement
                                  .querySelector(".classTextButton2");
    console.log('elementUnderTest2 = ' + textJourNuitBeforeClic.textContent);
    console.log('elementUnderTest3 = ' + textJourNuitAfterClic.textContent);

    // Assert
    expect(buttonUnderTest.textContent)
      .toContain(expectedButtonTextAfterCLic);

    expect(textJourNuitBeforeClic.textContent)
    .toContain(expectedtextBeforeCLic);
    
    expect(textJourNuitAfterClic.textContent)
    .toContain(expectedtextAfterCLic);
  

  });

});
