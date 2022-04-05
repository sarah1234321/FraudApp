import { Component, OnInit } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  faArrowRightLong = faArrowRightLong;
  constructor() { }

  ngOnInit(): void {
  }

}
