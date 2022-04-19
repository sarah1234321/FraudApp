import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeActionsComponent } from './take-actions.component';

describe('TakeActionsComponent', () => {
  let component: TakeActionsComponent;
  let fixture: ComponentFixture<TakeActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
