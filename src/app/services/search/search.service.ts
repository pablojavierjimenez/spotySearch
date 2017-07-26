import { Injectable } from '@angular/core';
import { Http } from '@angular/Http';
import {Observable } from 'rxjs/Observable';
import { IBook } from './book';
import 'rxjs/add/operator/map';

@Injectable()

export class Search {
  constructor( private _http: Http){}

  getData(): Data[] {
    return [
      {
        "id" : "1",
        "name" : "War and Peace",
        "productCode": "GSI-0011",
        "releaseDate": "March 19, 1865",
        "description": "Tolstoy's epic masterpiece intertwines the lives of private and public individuals during the time of the Napoleonic wars and the French invasion of Russia. The fortunes of the Rostovs and the Bolkonskys, of Pierre, Natasha, and Andrei, are intimately connected with the national history that is played out in parallel with their lives. Balls and soirees alternate with councils of war and the machinations of statesmen and generals, scenes of violent battles with everyday human passions in a work whose extraordinary imaginative power has never been surpassed.",
        "author" : "Leo Tolstoy",
        "genre" : "war",
        "specifications": "Paperback, 1392 pages",
        "inStock" : true,
        "price" : 19.95,
        "starRating": 4.11,
        "imageUrl": "app/assets/images/656.jpg"
      },
      {
        "id" : "2",
        "name" : "The Hobbit",
        "productCode": "RBV-0012",
        "releaseDate": "September 21, 1937",
        "description": "Written for J.R.R. Tolkien’s own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent.",
        "author" : "J.R.R. Tolkien",
        "genre" : "fantasy",
        "specifications": "Paperback, 366 pages",
        "inStock" : true,
        "price" : 14.95,
        "starRating": 4.23,
        "imageUrl": "app/assets/images/5907.jpg"
      }
    ]

    /*
    https://www.youtube.com/watch?v=mSV0AihITxo
    https://github.com/jakblak/learn-angular2/tree/master/8_http_example/complete/app

    return this._http
      .get('https://pokeapi.co/api/v2/pokemon-form/1/')
      .map((response: Response) => response.json())
    */
  }
}
