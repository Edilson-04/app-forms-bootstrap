import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSumaComponent } from './form-suma.component';

describe('FormSumaComponent', () => {
  let component: FormSumaComponent;
  let fixture: ComponentFixture<FormSumaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSumaComponent]
    });
    fixture = TestBed.createComponent(FormSumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
