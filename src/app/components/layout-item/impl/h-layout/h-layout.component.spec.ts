import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HLayoutComponent } from './h-layout.component';

describe('HLayoutComponent', () => {
  let component: HLayoutComponent;
  let fixture: ComponentFixture<HLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
