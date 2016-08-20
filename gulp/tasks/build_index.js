var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var paths = require('../config/paths');

gulp.task('build_index', ['sass', 'scripts', 'images', 'fonts', 'vendor_scripts', 'vendor_styles'], function() {
  return gulp.src(paths.app.index)
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.dist.index))
});
