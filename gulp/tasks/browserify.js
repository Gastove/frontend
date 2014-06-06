var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('browserify', function() {
    return browserify('./js/app.js')
        .bundle()
        .pipe(reactify())
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});
