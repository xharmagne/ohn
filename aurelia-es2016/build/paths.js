var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  font: appRoot + 'fonts/*.*',
  image: appRoot + 'img/*.*',
  style: 'styles/**/*.css',
  cssFramework: 'jspm_packages/github/zurb/foundation-sites*/dist/foundation.js',
  sass: appRoot + 'scss/app.scss',
  sassFramework: 'jspm_packages/github/zurb/foundation-sites@6.2.0/scss',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
