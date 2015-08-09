var gulp = require('gulp');
var runSequence = require('run-sequence').use('gulp', 'git');

gulp.task('deploy', function (callback) {
          runSequence(
              'checkoutDeployBranch',
              'mergeDevelopmentBranch',
              'commitMerge',
              'build',
              'addBuildOutputs',
              'commitBuildOutputs',
              'pushToOrigin',
              'pushToHeroku',
              'checkoutDevelopmentBranch',
              callback
          );
});
