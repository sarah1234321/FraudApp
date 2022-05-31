import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestsReportComponent } from './my-requests-report.component';

describe('MyRequestsReportComponent', () => {
  let component: MyRequestsReportComponent;
  let fixture: ComponentFixture<MyRequestsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRequestsReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequestsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
