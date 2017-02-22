var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

gulp.task('hello', function() {
  console.log('Hello World');
});

gulp.task('sass', function(){
  return gulp.src('lib/scss/app.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'public'
    },
    ui: {
        port: 8000
    },
  });
});

gulp.task('useref', function(){
return gulp.src(['lib/**/app.js', 'lib/**/*.js'])
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('public/scss/**/*.scss', ['sass']); 
  gulp.watch('public/*.html', browserSync.reload); 
  gulp.watch('public/js/**/*.js', browserSync.reload);
});



