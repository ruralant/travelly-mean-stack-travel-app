const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');

gulp.task('sass', () => {
  return gulp.src('lib/scss/app.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }, ui: { port: 8000 },
  });
});

gulp.task('useref', function() {
return gulp.src('/public/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('public'));
});

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('public/scss/**/*.scss', ['sass']); 
  gulp.watch('public/*.html', browserSync.reload); 
  gulp.watch('public/js/**/*.js', browserSync.reload);
});



