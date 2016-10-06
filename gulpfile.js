'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');

// Uglify Task
// Minifies JavaScript files
gulp.task('uglify', () => {
  gulp.src('app/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['uglify']);
