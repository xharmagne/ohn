var gulp = require('gulp');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', function() {
  return gulp.src(paths.source)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output));
});

// transpile foundation
gulp.task('build-cssframework', function() {
  return gulp.src(paths.cssFramework)
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions.system())))
    .pipe(concat('foundation.js'))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// copies font files to the output directory
gulp.task('build-font', function() {
  return gulp.src([paths.font], {base: paths.root})
    .pipe(gulp.dest(paths.output));
});

// copies img files to the output directory
gulp.task('build-image', function() {
  return gulp.src([paths.image], {base: paths.root})
    .pipe(gulp.dest(paths.output));
});

// build sass
gulp.task('build-sass', function () {
    gulp.src(paths.sass)
      .pipe(sass({
          style: 'compressed',
          includePaths: [
            paths.sassFramework
          ],
          errLogToConsole: true
      }).on('error', sass.logError))
      .pipe(minifyCSS())
      .pipe(gulp.dest(paths.output))
      .pipe(browserSync.stream());
});


// copies changed css files to the output directory
gulp.task('build-css', function() {
  return gulp.src(paths.css)
    .pipe(changed(paths.output, {extension: '.css'}))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-cssframework', 'build-sass', 'build-html', 'build-css', 'build-font', 'build-image'],
    callback
  );
});
