import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SpotifyService {

  private searchUrl: string;
  private _headers: any;
  private _authService: any = new AuthService();

  constructor(private _http: Http) {
    this._headers = this._getHeaders();
  }

  searchMusic(searchedText: string, type: string) {
    this.searchUrl = `https://api.spotify.com/v1/search?q=${searchedText}&offset=0&limit=20&type=${type}&market=US`;
    return this._http.get( this.searchUrl, this._headers )
    .map(res => res.json())
    .catch( (error) => {
      // Do messaging and error handling here
      if ( error.status === 401 ) {
        this._authService.login();
      }
      return JSON.parse(error);
    });
  }

  private _getHeaders() {
    const header = new Headers();
    header.append('Authorization', 'Bearer ' + this._authService.getToken() );
    const options = new RequestOptions({ headers: header });
    return options;
  }
}
