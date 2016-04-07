import {inject} from 'aurelia-framework';
import {RegistrantsService} from './registrants-service';

@inject(RegistrantsService)
export class Registrants {
  heading = 'Registrants';
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


  constructor(registrantsService) {
    this.registrantsService = registrantsService;
  }

  activate() {
    return this.registrantsService.getRegistrants()
      .then(registrants => this.registrants = registrants);
  }

}
