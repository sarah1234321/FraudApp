import { Component, OnInit } from '@angular/core';

import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-requests-report',
  templateUrl: './my-requests-report.component.html',
  styleUrls: ['./my-requests-report.component.css']
})
export class MyRequestsReportComponent implements OnInit {
  faEye = faEye;
  constructor() { }

  ngOnInit(): void {
  }

}
