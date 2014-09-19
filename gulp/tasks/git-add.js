var gulp = require('gulp');
var git = require('gulp-git');

gulp.task('git-add', function(){
    return gulp.src('buildDir')
        .pipe(git.add());
});
