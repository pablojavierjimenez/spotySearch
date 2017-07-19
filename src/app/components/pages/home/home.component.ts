import { Component } from '@angular/core';

/**
 * ${componentName} Component Decorator
 * Component TagName: <home></home>
 */
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent {
  public homeText: String = 'esta es la home.';
  public homeSaludo = 'hola jota';

  cambiarsaludo(){
      this.homeSaludo = 'yuta botón';
  }
}