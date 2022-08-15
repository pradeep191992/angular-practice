import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignlePostComponent } from './signle-post.component';

describe('SignlePostComponent', () => {
  let component: SignlePostComponent;
  let fixture: ComponentFixture<SignlePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignlePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignlePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
