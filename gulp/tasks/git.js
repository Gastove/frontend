var gulp = require('gulp');
var git = require('gulp-git');

var DEPLOY = 'git-test2';
var DEV = 'git-test';

/*
 * Switch to deploy branch.      1
 * Merge in development branch.  1
 * Run the build.                d
 * Add the build outputs         2
 * Commit build outputs          2
 * Push to master                2
 * Push to heroku                2
 * Change back to development branch
 *
 */

var add = function(toAdd){
    return gulp.src(toAdd)
        .pipe(git.add());
};

var commit = function(msg, args){
    var args = args || {};

    return gulp.src('./build/*')
        .pipe(git.commit(msg, args));
};

var commitEmpty = function(){
    var msg  = 'Empty commit, probably for testing.';
    var args = {args: '--allow-empty'};

    return commit(msg, args);
};

var merge = function(target){
    git.merge(target, function(err){
        if (err) throw err;
    });
};

var push = function(dest) {
    git.push(dest, 'master', function(err) {
        if (err) throw err;
    });
};

var changeBranch = function(dest) {
    git.checkout(dest, function(err) {
        if (err) throw err;
    });
};

gulp.task('git-test', function() {
    commitEmpty();
    changeBranch('git-test2');
    merge('git-test');
    changeBranch('git-test');
});

gulp.task('mergeDevelopmentBranch', function() {
    merge(DEV);
});

gulp.task('checkoutDeployBranch', function() {
    changeBranch(DEPLOY);
});

gulp.task('checkoutDevelopmentBranch', function() {
    changeBranch(DEV);
});

gulp.task('addBuildOutputs', function() {
    add('./build/*');
});

gulp.task('commitBuildOutputs', function() {
    val msg = 'Committing build outputs';
    commit(msg);
});

gulp.task('pushToOrigin', function(){
    return push('origin');
});

gulp.task('pushToHeroku', function(){
    return push('herokue');
});
