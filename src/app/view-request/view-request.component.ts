import { Component, OnInit } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  faArrowRightLong = faArrowRightLong;
  constructor() { }

  ngOnInit(): void {
  }

}
