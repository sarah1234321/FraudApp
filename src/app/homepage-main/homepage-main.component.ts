import { Component, OnInit } from '@angular/core';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage-main',
  templateUrl: './homepage-main.component.html',
  styleUrls: ['./homepage-main.component.css']
})
export class HomepageMainComponent implements OnInit {
  faArrowRightLong = faArrowRightLong;
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
