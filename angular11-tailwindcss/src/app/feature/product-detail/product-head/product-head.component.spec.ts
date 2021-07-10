import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHeadComponent } from './product-head.component';

describe('ProductHeadComponent', () => {
  let component: ProductHeadComponent;
  let fixture: ComponentFixture<ProductHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
