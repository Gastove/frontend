var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

gulp.task('watch', function() {
    var bundler = watchify('./js/app.js');
    bundler.on('update', rebundle);

    function rebundle () {
        return bundler.bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./build/'));
    }

    return rebundle();
});
