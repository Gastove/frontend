var gulp = require('gulp');

gulp.task('deploy',
          [
              'checkoutDeployBranch',       // Check
              'mergeDevelopmentBranch',     // Check
              'browserify',                 // Check
              'compass',                    // Check
              'addBuildOutputs',            // Check
              'commitBuildOutputs',         // Check
              'pushToOrigin',               // Check
              'pushToHeroku',               // Check
              'checkoutDevelopmentBranch'   // Check
          ]);
