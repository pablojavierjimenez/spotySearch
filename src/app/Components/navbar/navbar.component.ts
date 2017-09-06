import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  public navbarText: string = 'Hello World! from a component.';

  constructor() { }

  ngOnInit() {
  }

}
