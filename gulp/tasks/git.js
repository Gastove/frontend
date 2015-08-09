var gulp = require('gulp');
var git = require('gulp-git');

var DEPLOY = 'master';
var DEV = 'staging';
var BUILD_DIR = './public/*';

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
    var argumentss = args || {};
    return git.commit(msg, args);
    // return gulp.src(target)
    //     .pipe(git.commit(msg, args));
};

var commitEmpty = function(){
    var msg  = 'Empty commit, probably for testing.';
    var args = {args: '--allow-empty'};

    return commit(msg, args);
};

var merge = function(target){
    git.merge(target, {args: "--ff"}, function(err){
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

gulp.task('mergeDevelopmentBranch', ['checkoutDeployBranch'], function() {
    merge(DEV);
});

gulp.task('checkoutDeployBranch', function() {
    changeBranch(DEPLOY);
});

gulp.task('checkoutDevelopmentBranch', ['pushToHeroku'], function() {
    changeBranch(DEV);
});

gulp.task('addBuildOutputs', ['build'], function() {
    add('./public/js/bundle.js');
    add('./public/stylesheets/ie.css');
    add('./public/stylesheets/screen.css');
    add('./public/stylesheets/print.css');
});

gulp.task('commitMerge', ['mergeDevelopmentBranch'], function() {
    var msg = 'Merge stag into master';
    commit(msg);
});

gulp.task('commitBuildOutputs', ['addBuildOutputs'], function() {
    var msg = 'Committing build outputs';
    commit(msg, {args: '-a'});
});

gulp.task('pushToOrigin', ['commitBuildOutputs'], function(){
    push('origin');
});

gulp.task('pushToHeroku', ['pushToOrigin'], function(){
     push('heroku');
});
