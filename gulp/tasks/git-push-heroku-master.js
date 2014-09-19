var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('git-push-heroku-master', function() {
    git.push('origin', 'heroku', function(err) {
        if (err) throw err;
    });
});
