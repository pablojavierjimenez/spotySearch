import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SpotifyService } from '../../Services/spotify.service';
import { Artist } from '../../Models/Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  providers: [SpotifyService]
})

export class SearchComponent implements OnInit {
  @Input() searchType: string;
  @Output() searchResponse = new EventEmitter();
  public searchStr: string;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() { }

  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr, this.searchType)
      .subscribe(res => {
        this.searchResponse.emit(res);
      });
  }
}
