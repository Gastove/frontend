var gulp = require('gulp');
var runSequence = require('run-sequence').use('gulp');

gulp.task('deploy', function (callback) {
          runSequence(
              'checkoutDeployBranch',
              'mergeDevelopmentBranch',
              'build',
              'addBuildOutputs',
              'commitBuildOutputs',
              'pushToOrigin',
              'pushToHeroku',
              'checkoutDevelopmentBranch',
              callback
          );
});
