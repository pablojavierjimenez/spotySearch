import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public baseUrl= 'https://accounts.spotify.com/authorize/?client_id=';
  public clientId = '478ed04cfcd6452884c5261da7678b88';
  public responseType= '&response_type=token';
  public redirectUrl= '&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fhome';
  private _token: string;


  constructor() {
    const isStorageSetted = localStorage.getItem('tokenData');

    if (!isStorageSetted) {
      this.login();
    } else if (isStorageSetted === '{}' ) {
      this.setToken();
    }
  }

  getToken() {
    const tokenDataFromStorage = JSON.parse( localStorage.getItem('tokenData') );
    return tokenDataFromStorage.token;
    //return this._token;
  }

  setToken() {
    const actualTime = new Date();
    const endValidTime = actualTime.getTime() + 3600000;
    this._token = window.location.hash.split('=')[1].split('&')[0];

    localStorage.setItem('tokenData',
      JSON.stringify({
        token: this._token,
        endValidTime: endValidTime
      })
    );
    this.cleanUrl();
  }

  login() {
    localStorage.setItem('tokenData', '{}' );
    let url = this.baseUrl + this.clientId + this.responseType + this.redirectUrl;
    console.log(url);
    window.location.href = url;
    return false;
  }

  cleanUrl() {
    window.location.href = window.location.origin + window.location.pathname;
  }
}
