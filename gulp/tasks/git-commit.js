var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('git-commit', function(){
    var msg = 'WRITE ME';

    return gulp.src('buildDir/*')
        .pipe(git.commit(msg));

});
