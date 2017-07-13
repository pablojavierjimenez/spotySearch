/**
 * Import Depensences
 * @type {[type]}
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

/**
 * App component decorator
 * @param {obj} {  encapsulation [Dependencie]
 * @example <app></app>
 */
@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None, // Controler Dependencia
  selector: 'app', // name of the usable component eg: <app></app>
  templateUrl: './app.component.html', // Component HTML <app> tag template
  styleUrls: ['./app.component.less'], // Component CSS
  directives: [NavbarComponent]
})

/**
 * 
 */
export class AppComponent {
  public greeting = 'Hello Deloitte!';

  changeGreeting() {
    this.greeting = 'You button-clicker!';
  }
}
