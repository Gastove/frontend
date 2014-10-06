var gulp = require('gulp');

gulp.task('deploy',
          [
              //'setDeploy',
              'checkoutDeployBranch',       // Check
              'mergeDevelopmentBranch',     // Check
              'pushToOrigin',               // Check
              'pushToHeroku',               // Check
              'checkoutDevelopmentBranch'   // Check
          ]);
