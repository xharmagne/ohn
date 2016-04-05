export class Registrant {
  gamertag: string;
  region: string;
  passType: string;
  games: RegistrantGames;
}

export class RegistrantGames {
  sfRegistered: boolean;
  tkRegistered: boolean;
  mkRegistered: boolean;
  a1Registered: boolean;
  a2Registered: boolean;
}
