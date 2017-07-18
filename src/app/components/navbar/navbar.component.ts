import { Component } from '@angular/core';

/**
 * ${componentName} Component Decorator
 * Component TagName: <navbar></navbar>
 */
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})

export class NavbarComponent {
  public navbarText: String = 'Hello World! from a component.'
}