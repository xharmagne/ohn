import {Component, ChangeDetectionStrategy, OnInit} from 'angular2/core';
import {Registrant}        from './registrant';
import {RegistrantService} from './registrant.service';
import {FilterRegistrantsPipe} from './filter.pipe';


@Component({
  selector: 'registrant-list',
  templateUrl: 'app/registrant-list.component.html',
  pipes: [FilterRegistrantsPipe]
})
export class RegistrantListComponent implements OnInit {

  filterGamertag = "";
  filterRegion = "";
  filterPassType = "";
  filterGame = "";
  showFilterOptions = false;

  regions = [
      {value: "", name: "All"},
      {value: "NSW", name: "NSW"},
      {value: "ACT", name: "ACT"},
      {value: "QLD", name: "QLD"},
      {value: "VIC", name: "VIC"},
      {value: "WA", name: "WA"},
      {value: "SA", name: "SA"},
      {value: "NT", name: "NT"},
      {value: "TAS", name: "TAS"}
  ];
  passTypes = [
      {value: "", name: "All"},
      {value: "Competitor", name: "Competitor"},
      {value: "Spectator", name: "Spectator"}
  ];
  games = [
      {value: "", name: "All"},
      {value: "SF", name: "SFV"},
      {value: "TK", name: "TK7"},
      {value: "MK", name: "MKX"},
      {value: "A1", name: "VF5FS"}
  ];

  constructor (private _registrantService: RegistrantService) {}
  errorMessage: string;
  registrants: Registrant[];
  ngOnInit() { this.getRegistrants(); }
  getRegistrants() {
    this._registrantService.getRegistrants()
                     .subscribe(
                       registrants => this.registrants = registrants,
                       error =>  this.errorMessage = <any>error);
  }

}
