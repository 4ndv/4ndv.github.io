var gulp = require("gulp"),
    less = require("gulp-less"),
    path = require("path");

var paths = {
  less: ['./less/**/*.less']
}

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});

gulp.task('default', ['watch', 'less']);
