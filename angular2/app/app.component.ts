import {Component}         from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES}       from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {Registrant}              from './registrant';
import {RegistrantListComponent} from './registrant-list.component';
import {RegistrantService}       from './registrant.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives:[RegistrantListComponent, ROUTER_DIRECTIVES],
    providers: [
      HTTP_PROVIDERS,
      RegistrantService,
    ]
})
@RouteConfig([
  {path:'/registrants', name: 'Registrants', component: RegistrantListComponent}
])
export class AppComponent {
}
