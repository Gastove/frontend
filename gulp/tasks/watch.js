var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('watch', ['setWatch', 'browserify'], function() {
    gulp.watch('js/sass/**', ['compass']);
});
