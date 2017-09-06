import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  public artistDataFromSearch: any;
  constructor() { }

  ngOnInit() {
  }

  setResponseResult(event) {
    this.artistDataFromSearch = event;
    console.log(this.artistDataFromSearch);
  }
}
