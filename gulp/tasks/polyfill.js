var gulp = require('gulp');
var polyfiller = require('gulp-polyfiller');

gulp.task('polyfill', function () {
    polyfiller
        .bundle(['Promise', 'Fetch'])
        .pipe(gulp.dest('polyfills.js'));
});
