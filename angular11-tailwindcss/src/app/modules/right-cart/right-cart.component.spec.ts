import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightCartComponent } from './right-cart.component';

describe('RightCartComponent', () => {
  let component: RightCartComponent;
  let fixture: ComponentFixture<RightCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
