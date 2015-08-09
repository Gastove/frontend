var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('deploy',
          runSequence(
              'checkoutDeployBranch',
              'mergeDevelopmentBranch',
              'build',
              'addBuildOutputs',
              'commitBuildOutputs',
              'pushToOrigin',
              'pushToHeroku',
              'checkoutDevelopmentBranch'
          ));
