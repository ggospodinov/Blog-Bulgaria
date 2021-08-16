import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateimageComponent } from './createimage.component';

describe('CreateimageComponent', () => {
  let component: CreateimageComponent;
  let fixture: ComponentFixture<CreateimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
