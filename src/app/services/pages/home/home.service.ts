/**
 * ${componentName} Service Imports
 * Component TagName: HeroService
 */
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HomeComponent }from '../../../components/pages/home/home.component';

/**
 * ${componentName} Injectable Configuration
 * Injectable TagName: HeroService
 */
@Injectable()

export class HomeService {

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map(response => response.json().data as Hero[]);
  }
}
