var gulp = require('gulp');

gulp.task('deploy',
          [
              'checkoutDeployBranch',
              'mergeDevelopmentBranch',
              'build',
              'addBuildOutputs',
              'commitBuildOutputs',
              'pushToOrigin',
              'pushToHeroku',
              'checkoutDevelopmentBranch'
          ]);
