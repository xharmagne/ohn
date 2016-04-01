export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'ohn'], name: 'ohn', moduleId: 'ohn', nav: true, title: 'OHN' },
      { route: 'registration', name: 'registration', moduleId: 'registration', nav: true, title: 'Registration' },
      { route: 'cancelled', name: 'cancelled', moduleId: 'registration', nav: false, title: 'Registration cancelled' },
      { route: 'confirmed', name: 'confirmed', moduleId: 'confirmed', nav: false, title: 'Registration confirmed' },
      { route: 'registrants', name: 'registrants', moduleId: 'registrants', nav: true, title: 'Registrants' }
    ]);

    this.router = router;
  }
}
