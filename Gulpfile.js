var gulp = require('gulp');
var gutil = require('gulp-util');
var requireDir = require('require-dir');

requireDir('./gulp/tasks');

gulp.task('default', ['open', 'watch', 'connect']);

gulp.task('build', ['build_index']);
