/**
 * Import Depensences
 * @type {[type]}
 */
import { Component, ViewEncapsulation } from '@angular/core';

/**
 * App component decorator
 * @param {obj} {  encapsulation [Dependencie]
 * @example <app></app>
 */
@Component({
  encapsulation: ViewEncapsulation.None, // Controler Dependencia
  selector: 'app', // name of the usable component eg: <app></app>
  templateUrl: './app.component.html', // Component HTML <app> tag template
  styleUrls: ['./app.component.less'] // Component CSS
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
