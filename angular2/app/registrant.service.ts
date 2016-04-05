import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Registrant}     from './registrant';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class RegistrantService {
  constructor (private http: Http) {}

  private _url = 'http://localhost:89/ohn14/scripts/registrants.php';  // URL to web api

  getRegistrants () {
    return this.http.get(this._url)
                    .map(res => <Registrant[]> res.json())
                    .catch(this.handleError);
  }
  private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
