import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyPalowanComponent } from './hierarchy-palowan.component';

describe('HierarchyPalowanComponent', () => {
  let component: HierarchyPalowanComponent;
  let fixture: ComponentFixture<HierarchyPalowanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyPalowanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyPalowanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
