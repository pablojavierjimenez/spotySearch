import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  private url: string;
  myData: Array<any>;
  constructor(http: Http) {
    this.url = 'https://jsonplaceholder.typicode.com/photos';

    http.get('this.url')
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(res => this.myData = res);
  }
}
