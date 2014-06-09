var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('watch', ['setWatch', 'browserify']);

/* This is known to work, but we're trying something new.
gulp.task('watch', function() {

    var bundler = watchify('./js/app.js');
    bundler.on('update', rebundle);

    function rebundle () {
        return bundler.bundle({debug: true})
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./build/'));
    }

    return rebundle();
});
*/
