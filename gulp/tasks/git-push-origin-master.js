var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('git-push-origin-master', function() {
    git.push('origin', 'master', function(err) {
        if (err) throw err;
    });
});
