import { Component } from '@angular/core';

/**
 * ${componentName} Component Decorator
 * Component TagName: <header></header>
 */
@Component({
  selector: 'sps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent {
  public headerTitle: String = 'spotySearch'
}