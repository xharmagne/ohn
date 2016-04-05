System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FilterRegistrantsPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilterRegistrantsPipe = (function () {
                function FilterRegistrantsPipe() {
                }
                FilterRegistrantsPipe.prototype.transform = function (value, _a) {
                    var gamertag = _a[0], region = _a[1], passType = _a[2], game = _a[3];
                    if (!value) {
                        return value;
                    }
                    var filtered = value.filter(function (registrant) {
                        return (!gamertag || registrant.gamertag.toLowerCase().includes(gamertag.toLowerCase())) &&
                            (!region || registrant.region == region) &&
                            (!passType || registrant.passType == passType) &&
                            (!game ||
                                ((game == "SF" && registrant.games.sfRegistered) ||
                                    (game == "TK" && registrant.games.tkRegistered) ||
                                    (game == "MK" && registrant.games.mkRegistered) ||
                                    (game == "A1" && registrant.games.a1Registered)));
                    });
                    return filtered;
                };
                FilterRegistrantsPipe = __decorate([
                    core_1.Pipe({
                        name: 'filterRegistrants',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterRegistrantsPipe);
                return FilterRegistrantsPipe;
            }());
            exports_1("FilterRegistrantsPipe", FilterRegistrantsPipe);
        }
    }
});
//# sourceMappingURL=filter.pipe.js.map