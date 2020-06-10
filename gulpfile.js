const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync'),
      autoprefixer = require('gulp-autoprefixer'),
      ghPages = require('gulp-gh-pages');


gulp.task('scss', function() {
  return gulp.src('docs/scss/style.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(autoprefixer({
    cascade: false
  }))
  .pipe(gulp.dest('docs/css'))
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
  return gulp.src('docs/*.html')
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function() {
  return gulp.src('docs/js/*.js')
  .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "docs/"
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('docs/scss/**/*.scss', gulp.parallel('scss'))
  gulp.watch('docs/*html', gulp.parallel('html'))
  gulp.watch('docs/js/*js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));

gulp.task('deploy', function() {
  return gulp.src('./docs/**/*')
  .pipe(ghPages());
});