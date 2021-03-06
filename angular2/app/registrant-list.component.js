System.register(['angular2/core', './registrant.service', './filter-registrants.pipe', './filter-registrants-count.pipe', './list-count.pipe'], function(exports_1, context_1) {
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
    var core_1, registrant_service_1, filter_registrants_pipe_1, filter_registrants_count_pipe_1, list_count_pipe_1;
    var RegistrantListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (registrant_service_1_1) {
                registrant_service_1 = registrant_service_1_1;
            },
            function (filter_registrants_pipe_1_1) {
                filter_registrants_pipe_1 = filter_registrants_pipe_1_1;
            },
            function (filter_registrants_count_pipe_1_1) {
                filter_registrants_count_pipe_1 = filter_registrants_count_pipe_1_1;
            },
            function (list_count_pipe_1_1) {
                list_count_pipe_1 = list_count_pipe_1_1;
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
                        templateUrl: 'app/registrant-list.component.html',
                        pipes: [filter_registrants_pipe_1.FilterRegistrantsPipe, filter_registrants_count_pipe_1.FilterRegistrantsCountPipe, list_count_pipe_1.ListCountPipe]
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