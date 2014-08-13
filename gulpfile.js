var gulp = require('gulp');
var sass = require('gulp-sass')

var filesSass = './sass/**/*.scss';
var otherFiles = './sass/**/!(*.scss)';

gulp.task('sass-compile', function () {
  gulp.src(filesSass)
    .pipe(sass())
    .pipe(gulp.dest('./assets'));
});

gulp.task('copy-files', function () {
  gulp.src(otherFiles)
    .pipe(gulp.dest('./assets'));
});

gulp.task('compile', ['sass-compile', 'copy-files']);

gulp.task('default', function () {
  gulp.watch(filesSass, ['compile']);
});