var gulp = require('gulp');
var runSequence = require('run-sequence').use('gulp', 'git');

gulp.task('deploy',
          [
              // 'checkoutDeployBranch',
              // 'mergeDevelopmentBranch',
              'commitMerge',
              // 'build',
              // 'addBuildOutputs',
              // 'commitBuildOutputs',
              // 'pushToOrigin',
              // 'pushToHeroku',
              'checkoutDevelopmentBranch',

          ]);
