import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class RegistrantsService {

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:89/ohn14/scripts/');
    });

    this.http = http;
  }

  getRegistrants() {
    return this.http.fetch('registrants.php')
      .then(response => response.json());
  }
}
