import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPalowanComponent } from './form-palowan.component';

describe('FormPalowanComponent', () => {
  let component: FormPalowanComponent;
  let fixture: ComponentFixture<FormPalowanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPalowanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPalowanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
