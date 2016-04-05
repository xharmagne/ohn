import {Component, ChangeDetectionStrategy, OnInit} from 'angular2/core';
import {Registrant}        from './registrant';
import {RegistrantService} from './registrant.service';
import {FilterRegistrantsPipe} from './filter.pipe';


@Component({
  selector: 'registrant-list',
  template: `

  <!-- OPTIONS -->
  <div class="toggle-row">
    <div class="row">
        <div class="small-12 text-center columns">
          <input id="chkShowFilterOptions" type="checkbox" [(ngModel)]="showFilterOptions" class="hidden-accessible">
          <label for="chkShowFilterOptions">
              <span *ngIf="showFilterOptions">Hide filter options</span>
              <span *ngIf="!showFilterOptions">Show filter options</span>
          </label>
        </div>
      </div>
  </div>

  <div class="options-row">
    <div  class="filter-options row"  style="max-width:53rem;">
      <div class="au-animate options-container small-12 columns" *ngIf="showFilterOptions">
        <div class="row">
          <div class="option-column medium-3 columns">
            <label for="txtGamertag">Gamertag</label>
            <input id="txtGamertag" [(ngModel)]="filterGamertag" type="text" />
          </div>
          <div class="option-column medium-3 columns">
            <label for="selRegion">Region</label>
            <select id="selRegion" [(ngModel)]="filterRegion">
                  <option *ngFor="#option of regions" [value]="option.value">{{option.name}}</option>
            </select>
          </div>
          <div class="option-column medium-3 columns">
            <label for="selPassType">Pass type</label>
            <select id="selPassType" [(ngModel)]="filterPassType">
                  <option *ngFor="#option of passTypes" [value]="option.value">{{option.name}}</option>
            </select>
          </div>
          <div class="option-column medium-3 columns">
            <label for="selGames">Game</label>
            <select id="selGames" [(ngModel)]="filterGame">
                  <option *ngFor="#option of games" [value]="option.value">{{option.name}}</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  </div>


  <!-- REGISTRANTS -->
  <div class="results-row">
    <div class="row">
      <div class="small-12 columns">
        <table align="center">
          <thead>
              <tr>
                  <td>Gamertag</td>
                  <td>Region</td>
                  <td>Pass type</td>
                  <td>Games</td>
              </tr>
          </thead>
          <tbody class="au-stagger">
              <tr class="registrant-name au-animate" *ngFor="#registrant of registrants | filterRegistrants:filterGamertag:filterRegion:filterPassType:filterGame">
                  <td><div class="gamertag">{{registrant.gamertag}}</div></td>
                  <td><div>{{registrant.region}}</div></td>
                  <td><div>{{registrant.passType}}</div></td>
                  <td>
                    <div>
                      <span *ngIf="registrant.games.sfRegistered">SFV </span>
                      <span *ngIf="registrant.games.tkRegistered">T7 </span>
                      <span *ngIf="registrant.games.mkRegistered">MKX </span>
                      <span *ngIf="registrant.games.a1Registered">VF5FS </span>
                    </div>
                  </td>
              </tr>
          </tbody>


        </table>
      </div>
    </div>
  </div>
  `,
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
