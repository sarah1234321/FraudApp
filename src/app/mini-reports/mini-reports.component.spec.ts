import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniReportsComponent } from './mini-reports.component';

describe('MiniReportsComponent', () => {
  let component: MiniReportsComponent;
  let fixture: ComponentFixture<MiniReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
