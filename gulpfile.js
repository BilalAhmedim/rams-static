var
gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssimport = require('postcss-import'),
nested = require('postcss-nested'),
mixin = require('postcss-mixins'),
vars = require('postcss-simple-vars'),
hexrgba = require('postcss-hexrgba'),
watch = require('gulp-watch'),
autoprefixer = require('autoprefixer'),
sync = require('browser-sync').create(),
rename = require('gulp-rename'),
maps = require('gulp-sourcemaps'),
plumber = require('gulp-plumber')
;
gulp.task('watch', function(){

  sync.init({
    server: {
      baseDir: './App/'
    },
    notify: false
  });

  watch('./App/index.html', function(){
    sync.reload();
  });
  watch('./App/css/**/*.pcss', gulp.series('stream'));
  watch('./App/js/**/*.js', function(){
    sync.reload();
  });
});

gulp.task('styles', function(){
  return gulp.src('./App/css/style.pcss')
  .pipe(maps.init())
  .pipe(postcss([cssimport, mixin, nested, vars, hexrgba, autoprefixer]))
  .pipe(plumber())
  .pipe(rename(
    {
      extname: ".css"
    }
  ))
  .pipe(maps.write())
  .pipe(gulp.dest('./App/'))
});

gulp.task('stream', gulp.series('styles', function(){
  return gulp.src('./App/style.css')
  .pipe(sync.stream());
}))
