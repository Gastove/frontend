var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var notify = require('gulp-notify');
var compass = require('gulp-compass');

gulp.task('compass', function() {
    return gulp.src('./js/sass/*.scss')
        .pipe(compass({
            config_file: './compass.rb',
            css: './build/css',
            sass: 'js/sass'
        }))
        .pipe(gulp.dest('./public/stylesheets'))
        .on('error', handleErrors);
});
