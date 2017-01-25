'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');

// Uglify Task
// Minifies JavaScript files
gulp.task('uglify', () => {
  return gulp.src('app/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['uglify']);

gulp.task('code-coverage', () => {
  return gulp.src(['app/**/*.js'])
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['code-coverage'], () => {
    return gulp.src(['specs/**/*.js'])
    .pipe(mocha({reporter: 'nyan'}))
    .pipe(istanbul.writeReports({
        dir: './coverage',
        reporters: [ 'lcov', 'json', 'text', 'text-summary' ],
        reportOpts: { dir: './coverage' }
  }));
});
