import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseActionComponent } from './case-action.component';

describe('CaseActionComponent', () => {
  let component: CaseActionComponent;
  let fixture: ComponentFixture<CaseActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
