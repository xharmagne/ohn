var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

var sassPaths = [
  'node_modules/foundation-sites/scss'
];

gulp.task('sass', function () {
    gulp.src('./scss/app.scss')
      .pipe(sass({
          style: 'compressed',
          includePaths: sassPaths,
          errLogToConsole: true
      }).on('error', sass.logError))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./'));
});
