import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mini-reports',
  templateUrl: './mini-reports.component.html',
  styleUrls: ['./mini-reports.component.css']
})
export class MiniReportsComponent implements OnInit {
  faEye = faEye;
  constructor() { }

  ngOnInit(): void {
  }

}
