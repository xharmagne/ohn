System.register(['angular2/core', './registrant.service', './filter.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, registrant_service_1, filter_pipe_1;
    var RegistrantListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (registrant_service_1_1) {
                registrant_service_1 = registrant_service_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            }],
        execute: function() {
            RegistrantListComponent = (function () {
                function RegistrantListComponent(_registrantService) {
                    this._registrantService = _registrantService;
                    this.filterGamertag = "";
                    this.filterRegion = "";
                    this.filterPassType = "";
                    this.filterGame = "";
                    this.showFilterOptions = false;
                    this.regions = [
                        { value: "", name: "All" },
                        { value: "NSW", name: "NSW" },
                        { value: "ACT", name: "ACT" },
                        { value: "QLD", name: "QLD" },
                        { value: "VIC", name: "VIC" },
                        { value: "WA", name: "WA" },
                        { value: "SA", name: "SA" },
                        { value: "NT", name: "NT" },
                        { value: "TAS", name: "TAS" }
                    ];
                    this.passTypes = [
                        { value: "", name: "All" },
                        { value: "Competitor", name: "Competitor" },
                        { value: "Spectator", name: "Spectator" }
                    ];
                    this.games = [
                        { value: "", name: "All" },
                        { value: "SF", name: "SFV" },
                        { value: "TK", name: "TK7" },
                        { value: "MK", name: "MKX" },
                        { value: "A1", name: "VF5FS" }
                    ];
                }
                RegistrantListComponent.prototype.ngOnInit = function () { this.getRegistrants(); };
                RegistrantListComponent.prototype.getRegistrants = function () {
                    var _this = this;
                    this._registrantService.getRegistrants()
                        .subscribe(function (registrants) { return _this.registrants = registrants; }, function (error) { return _this.errorMessage = error; });
                };
                RegistrantListComponent = __decorate([
                    core_1.Component({
                        selector: 'registrant-list',
                        template: "\n\n  <!-- OPTIONS -->\n  <div class=\"toggle-row\">\n    <div class=\"row\">\n        <div class=\"small-12 text-center columns\">\n          <input id=\"chkShowFilterOptions\" type=\"checkbox\" [(ngModel)]=\"showFilterOptions\" class=\"hidden-accessible\">\n          <label for=\"chkShowFilterOptions\">\n              <span *ngIf=\"showFilterOptions\">Hide filter options</span>\n              <span *ngIf=\"!showFilterOptions\">Show filter options</span>\n          </label>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"options-row\">\n    <div  class=\"filter-options row\"  style=\"max-width:53rem;\">\n      <div class=\"au-animate options-container small-12 columns\" *ngIf=\"showFilterOptions\">\n        <div class=\"row\">\n          <div class=\"option-column medium-3 columns\">\n            <label for=\"txtGamertag\">Gamertag</label>\n            <input id=\"txtGamertag\" [(ngModel)]=\"filterGamertag\" type=\"text\" />\n          </div>\n          <div class=\"option-column medium-3 columns\">\n            <label for=\"selRegion\">Region</label>\n            <select id=\"selRegion\" [(ngModel)]=\"filterRegion\">\n                  <option *ngFor=\"#option of regions\" [value]=\"option.value\">{{option.name}}</option>\n            </select>\n          </div>\n          <div class=\"option-column medium-3 columns\">\n            <label for=\"selPassType\">Pass type</label>\n            <select id=\"selPassType\" [(ngModel)]=\"filterPassType\">\n                  <option *ngFor=\"#option of passTypes\" [value]=\"option.value\">{{option.name}}</option>\n            </select>\n          </div>\n          <div class=\"option-column medium-3 columns\">\n            <label for=\"selGames\">Game</label>\n            <select id=\"selGames\" [(ngModel)]=\"filterGame\">\n                  <option *ngFor=\"#option of games\" [value]=\"option.value\">{{option.name}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n\n  <!-- REGISTRANTS -->\n  <div class=\"results-row\">\n    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <table align=\"center\">\n          <thead>\n              <tr>\n                  <td>Gamertag</td>\n                  <td>Region</td>\n                  <td>Pass type</td>\n                  <td>Games</td>\n              </tr>\n          </thead>\n          <tbody class=\"au-stagger\">\n              <tr class=\"registrant-name au-animate\" *ngFor=\"#registrant of registrants | filterRegistrants:filterGamertag:filterRegion:filterPassType:filterGame\">\n                  <td><div class=\"gamertag\">{{registrant.gamertag}}</div></td>\n                  <td><div>{{registrant.region}}</div></td>\n                  <td><div>{{registrant.passType}}</div></td>\n                  <td>\n                    <div>\n                      <span *ngIf=\"registrant.games.sfRegistered\">SFV </span>\n                      <span *ngIf=\"registrant.games.tkRegistered\">T7 </span>\n                      <span *ngIf=\"registrant.games.mkRegistered\">MKX </span>\n                      <span *ngIf=\"registrant.games.a1Registered\">VF5FS </span>\n                    </div>\n                  </td>\n              </tr>\n          </tbody>\n\n\n        </table>\n      </div>\n    </div>\n  </div>\n  ",
                        pipes: [filter_pipe_1.FilterRegistrantsPipe]
                    }), 
                    __metadata('design:paramtypes', [registrant_service_1.RegistrantService])
                ], RegistrantListComponent);
                return RegistrantListComponent;
            }());
            exports_1("RegistrantListComponent", RegistrantListComponent);
        }
    }
});
//# sourceMappingURL=registrant-list.component.js.map