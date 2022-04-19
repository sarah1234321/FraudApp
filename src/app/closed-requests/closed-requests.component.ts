import { Component, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-closed-requests',
  templateUrl: './closed-requests.component.html',
  styleUrls: ['./closed-requests.component.css']
})
export class ClosedRequestsComponent implements OnInit {
  faEye = faEye;
  constructor() { }

  ngOnInit(): void {
  }

}
