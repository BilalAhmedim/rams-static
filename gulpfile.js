var
gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssimport = require('postcss-import'),
nested = require('postcss-nestde'),
mixin = require('postcss-mixins'),
vars = require('postcss-simple-vars'),
rgbahex = require('postcss-hexrgba'),
watch = require('gulp-watch'),
autoprefixer = require('autoprefixer'),
sync = require('browser-sync').create(),
rename = require('gulp-rename'),
maps = require('gulp-sourcemaps')
;

gulp.task('styles', function(){
  return gulp.src('./App/css/**/*.pcss')
  .pipe(postcss([cssimport, mixin, nested, vars, hexrgba]))
  .pipe(maps.init())
  .pipe(plumber())
  .pipe(rename(
    {
      extname: ".css"
    }
  ))
  .pipe(maps.write('/'))
  .pipe(gulp.dest(./))
});
