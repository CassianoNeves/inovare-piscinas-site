var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var paths = require('../config/paths');

gulp.task('scripts', function () {
  return gulp.src(paths.app.scripts)
    .pipe(concat('scripts_bundle.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(paths.dist.scripts));
});
