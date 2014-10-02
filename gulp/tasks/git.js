var gulp = require('gulp');
var git = require('gulp-git');

var add = function(toAdd){
    return gulp.src(toAdd)
        .pipe(git.add());
};

var commit = function(msg, args){
    return gulp.src('./*')
        .pipe(git.commit(msg, args));
};

var commitEmpty = function(){
    var msg  = 'Empty commit, probably for testing.',
        args = '--allow-empty';

    return commit(msg, args);
};

var push = function(dest) {
    git.push(dest, 'master', function(err) {
        if (err) throw err;
    });
};

var changeBranch = function(dest) {};

gulp.task('commit-build', function() {
    return gulp.src(ADDS)
        .pipe(add(ADDS))
    // TODO: Need a timestamp and a better message.
        .pipe(commit("Committing build"));
});

gulp.task('push-to-origin', function(){
    return push('origin');
});

gulp.task('push-to-heroku', function(){
    return push('herokue');
});

// gulp.task('add', function(){
//     return gulp.src('buildDir')
//     .pipe(git.add());
// });

// gulp.task('commit', function(){
//     var msg = 'WRITE ME';

//     return gulp.src('buildDir/*')
//     .pipe(git.commit(msg));

// });

// gulp.task('push-origin-master', function() {
//     git.push('origin', 'master', function(err) {
//         if (err) throw err;
//     });
// });

// gulp.task('push-heroku-master', function() {
//     git.push('origin', 'heroku', function(err) {
//         if (err) throw err;
//     });
// });
