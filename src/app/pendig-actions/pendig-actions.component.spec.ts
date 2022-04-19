import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendigActionsComponent } from './pendig-actions.component';

describe('PendigActionsComponent', () => {
  let component: PendigActionsComponent;
  let fixture: ComponentFixture<PendigActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendigActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendigActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
