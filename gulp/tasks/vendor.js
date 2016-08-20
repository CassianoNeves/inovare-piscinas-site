var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var paths = require('../config/paths');

gulp.task('vendor_scripts', function () {
  return gulp.src([
    './app/vendor/js/modernizr-2.6.2.min.js',
    './app/vendor/js/jquery-1.11.1.min.js',
    './app/vendor/js/bootstrap.min.js',
    './app/vendor/js/jquery.singlePageNav.min.js',
    './app/vendor/js/owl.carousel.min.js',
    './app/vendor/js/jquery.easing.min.js',
    './app/vendor/js/jquery.slitslider.js',
    './app/vendor/js/jquery.ba-cond.min.js',
    './app/vendor/js/wow.min.js',
    './app/vendor/js/jquery.fancybox.pack.js',
    './app/vendor/js/google-analytics.js',
  ])
    .pipe(concat('vendor_scripts_bundle.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest(paths.dist.scripts));
});

gulp.task('vendor_styles', function () {
  return gulp.src([
    './app/vendor/css/font-awesome.min.css',
    './app/vendor/css/jquery.fancybox.css',
    './app/vendor/css/bootstrap.min.css',
    './app/vendor/css/owl.carousel.css',
    './app/vendor/css/animate.css',
  ])
    // .pipe(cssmin())
    .pipe(concat('vendor_styles_bundle.min.css'))
    .pipe(gulp.dest(paths.dist.sass));
});
