var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var bundleLogger = require('../util/bundleLogger');

gulp.task('browserify', function() {

    var bundler = browserify({
        cache: {},
        packageCache: {},
        fullPaths: true,
        entries: ['./js/app.jsx'],
        extensions: ['.jsx'],
        transform: [reactify],
        debug: true
    });

    var bundle = function() {
        bundleLogger.start();
        return bundler
            .bundle()
            .on('error', handleErrors)
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./public/js/'))
            .on('end', bundleLogger.end);
    };

    if (global.isWatching) {
        bundler = watchify(bundler);
        bundler.on('update', bundle);
    }

    return bundle();
});
