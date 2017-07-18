import { Component } from '@angular/core';

/**
 * ${componentName} Component Decorator
 * Component TagName: <artist></artist>
 */
@Component({
  selector: 'artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.less']
})

export class ArtistComponent {
  public artistText: String = 'esta es la vista del artista';
}