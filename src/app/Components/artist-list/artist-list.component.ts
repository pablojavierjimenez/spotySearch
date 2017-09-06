import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.less']
})

export class ArtistListComponent implements OnInit {
  @Input() artistData: any;

  constructor() {
    this.getArtistList();
  }

  ngOnInit() {
  }

  getArtistList() {

  }
  getRandomcolor() {
    return '#' + Math.floor( Math.random() * 16777215 ).toString(16);
  }
}
