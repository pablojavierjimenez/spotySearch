/**
 * ${componentName} Component Imports
 */
import { Component } from '@angular/core';

/**
 * ${componentName} Component Decorator
 * Component TagName: <app></app>
 */
@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.less']
})

/**
 * ${componentName} Component Class
 */
export class AppComponent {
    // aca es donde ocurre la magia
    public appName = 'SpotySearch';
}
