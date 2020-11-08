import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinequizComponent } from './onlinequiz.component';

describe('OnlinequizComponent', () => {
  let component: OnlinequizComponent;
  let fixture: ComponentFixture<OnlinequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinequizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
