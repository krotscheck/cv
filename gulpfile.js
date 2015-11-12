(function initializeGulp () {
  'use strict';

  var del = require('del');
  var mainBowerFiles = require('main-bower-files');

  var gulp = require('gulp');
  var ghPages = require('gulp-gh-pages');
  var filter = require('gulp-filter');
  var sass = require('gulp-sass');
  var webserver = require('gulp-webserver');
  var concat = require('gulp-concat');
  var vinylPaths = require('vinyl-paths');
  var merge = require('merge-stream');

  var dir = {
    dist: './dist',
    src: './src',
    bower: './bower_components',
    npm: './node_modules'
  };

  var paths = {
    scss: [dir.src + '/css/*.scss'],
    js: [dir.src + '/js/*/module.js', dir.src + '/js/**/*.js'],
    files: [dir.src + '/**/*.+(html|ico|json)']
  };

  // Contents of all our bower dependencies' main:[] fields.
  var bowerFiles = mainBowerFiles();

  /**
   * Cleans all imported, and generated, files from the project.
   *
   * @param {Function} cb callback.
   * @return {*} A gulp stream that performs this action.
   */
  gulp.task('clean', function () {
    return gulp.src([
      dir.dist
    ]).pipe(vinylPaths(del));
  });

  /**
   * Copy library fonts
   */
  gulp.task('package:fonts', function() {
    return gulp.src(bowerFiles)
      .pipe(filter(['*.otf', '*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2']))
      .pipe(gulp.dest(dir.dist + '/fonts'));
  });

  /**
   * Compile all styling files for the project. We're using SCSS includes here,
   * to explicitly choose which bits we need included.
   *
   * @return {*} A gulp stream that performs this action.
   */
  gulp.task('package:styles', function () {
    var cssStream = gulp.src(paths.scss)
      .pipe(sass())
      .pipe(gulp.dest(dir.dist + '/css'));

    var libStream = gulp.src(bowerFiles)
      .pipe(filter('*.css'))
      .pipe(gulp.dest(dir.dist + '/css'));
    // Merge all the streams and return.
    return merge.apply(merge, [cssStream, libStream]);
  });

  /**
   * Copy all external javascript files, as independent documents (since
   * they may carry their own license) into the output directory.
   *
   * @return {*} A gulp stream that performs this action.
   */
  gulp.task('package:libs', function () {
    return gulp.src(bowerFiles)
      .pipe(filter('*.js'))
      .pipe(gulp.dest(dir.dist + '/js/lib'));
  });

  /**
   * Iterate through the modules directory and build a concatenated js file for each directory.
   *
   * @return {*} A gulp stream that performs this action.
   */
  gulp.task('package:app', function () {
    return gulp.src(paths.js)
      .pipe(concat('resume.js'))
      .pipe(gulp.dest(dir.dist + '/js'));
  });

  /**
   * Copy static assets into our package.
   *
   * @return {*} A gulp stream that performs this action.
   */
  gulp.task('package:files', function () {
    return gulp.src(paths.files)
      .pipe(gulp.dest(dir.dist));
  });

  /**
   * Package the app
   */
  gulp.task('package',
    ['package:files', 'package:app', 'package:styles', 'package:libs',
      'package:fonts']);

  /**
   * Push the contents of the dist directory to gh-pages.
   */
  gulp.task('gh-pages', function () {
    return gulp.src(dir.dist + '/**/*.*')
      .pipe(ghPages());
  });

  /**
   * Build the current release package and push it to gh-pages.
   */
  gulp.task('release', ['package', 'gh-pages']);

  /**
   * Start a local server and serve the packaged application code.
   * This also watches the source tree and will update the application
   * whenever changes are detected.
   *
   * @return {*} A gulp stream that performs this action.
   */
  gulp.task('serve', ['package'], function () {

    gulp.watch(paths.files, ['package:files']);
    gulp.watch(paths.scss, ['package:styles']);
    gulp.watch(paths.js, ['package:app']);

    return gulp.src(dir.dist)
      .pipe(webserver({
        livereload: true,
        open: true
      }));
  });
})();
