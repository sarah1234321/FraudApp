import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-home',
  templateUrl: './test-home.component.html',
  styleUrls: ['./test-home.component.css']
})
export class TestHomeComponent implements OnInit {
  list1!: any[];

  list2!: any[];
  constructor() { }
  ngOnInit() {
    this.list1 = [1,2,3,3,6,4,5,8
    ];
    this.list2 = [];
}

}
