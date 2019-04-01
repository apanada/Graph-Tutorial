'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

const spsync = require('gulp-spsync-creds').sync;
build.task('upload-to-sharepoint', {
  execute: (config) => {
    return new Promise((resolve, reject) => {
      const folderLocation = [`./dist/**/*.html*`,`./dist/**/*.js*`,`./dist/**/*.map*`];
      return gulp.src(folderLocation)
        .pipe(spsync({
          "username": "ajitpanada@ngeniouscorp.onmicrosoft.com",
          "password": "P@ssw0rd",
          "site": "https://ngeniouscorp.sharepoint.com/sites/admin",
          "libraryPath": "SiteAssets/Angular-Graph",
          "publish": true
        }))
        .on('finish', resolve);
    });
  }
});

build.copyAssets.taskConfig = {
  excludeHashFromFileNames: true
}

build.initialize(gulp);
