import { Component } from '@angular/core';

/**
 * ${componentName} Component Decorator
 * Component TagName: <album></album>
 */
@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.less']
})

export class AlbumComponent {
  public albumText: String = 'esta es la vista de el album.'
}