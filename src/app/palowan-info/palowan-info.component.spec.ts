import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalowanInfoComponent } from './palowan-info.component';

describe('PalowanInfoComponent', () => {
  let component: PalowanInfoComponent;
  let fixture: ComponentFixture<PalowanInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalowanInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalowanInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
