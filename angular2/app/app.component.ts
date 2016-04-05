import {Component}         from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';

import {Registrant}              from './registrant';
import {RegistrantListComponent} from './registrant-list.component';
import {RegistrantService}       from './registrant.service';


@Component({
    selector: 'my-app',
    template: `
      <h1>Registrants</h1>
      <registrant-list></registrant-list>
    `,
    directives:[RegistrantListComponent],
    providers: [
      HTTP_PROVIDERS,
      RegistrantService,
    ]
})
export class AppComponent {
}
