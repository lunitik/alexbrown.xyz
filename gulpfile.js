const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const precss = require('precss');

gulp.task('css', function () {
    const processors = [
        autoprefixer,
        cssnext,
        precss
    ];
    return gulp.src('./src/css/*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./assets/css'));
  });