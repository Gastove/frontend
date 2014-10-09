var gulp = require('gulp');

gulp.task('deploy',
          [
              'mergeDevelopmentBranch',     // Check
              'pushToOrigin',               // Check
              'pushToHeroku',               // Check
              'checkoutDevelopmentBranch'   // Check
          ]);
