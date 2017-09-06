import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public baseUrl= 'https://accounts.spotify.com/authorize/?client_id=';
  public clientId = '478ed04cfcd6452884c5261da7678b88';
  public responseType= '&response_type=token';
  public redirectUrl= '&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fhome';

  public token: string = 'BQBTHuNR8zBX1c8fVWjd_5UgCkkd5tj3yV0MkhfAKGeu12BRAti0679fLdc0h8_k8i894ZK0hgwDvM5CudmmeIrj5m5-OnpVLr3gcjEZKnksq9rtQ3ZLPltrxJIvBucajAA1xB3JmGQQtNoycR4mt4pLoXv2IglF6V524aE';

  private _tokenData: any;
  constructor() {
    const isStorageSetted = ( localStorage.getItem('tokenData') ) ? true : false;

    if (!isStorageSetted) {
      this.login();
    } else if (isStorageSetted) {
      this.setToken();
    }
  }

  getToken() {
    const tokenDataFromStorage = JSON.parse( localStorage.getItem('tokenData') );
    return tokenDataFromStorage.token;// window.location.hash.split('=')[1].split('&')[0];//this.token;
  }

  setToken() {
    const actualTime = new Date();
    const endValidTime = actualTime.getTime() + 3600000;
    const token = window.location.hash.split('=')[1].split('&')[0];

    const tokenObj = {
      token: token,
      endValidTime: endValidTime
    };

    this._tokenData = tokenObj ;
    localStorage.setItem('tokenData', JSON.stringify( this._tokenData ) );
  }

  login() {
    console.log('llamo al login, asi que la seteo vacia luego veo que hago');
    console.log(this.baseUrl + this.clientId + this.responseType + this.redirectUrl);
    localStorage.setItem('tokenData', '{}' );
    window.location.href = this.baseUrl + this.clientId + this.responseType + this.redirectUrl;
    return false;
  }

}
