export class FilterCountValueConverter {
  toView(value, gamertag, region, passType, game) {

    if (!value) {
      return 0;
    }

    var filtered = value.filter(function(registrant) {
        return (!gamertag || registrant.gamertag.toLowerCase().includes(gamertag.toLowerCase())) &&
          (!region || registrant.region == region) &&
          (!passType || registrant.passType == passType) &&
          (!game ||
              ((game == "SF" && registrant.games.sfRegistered) ||
               (game == "TK" && registrant.games.tkRegistered) ||
               (game == "MK" && registrant.games.mkRegistered) ||
               (game == "A1" && registrant.games.a1Registered)));
    });

    return filtered.length;
  }
}
