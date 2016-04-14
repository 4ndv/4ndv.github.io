var gulp = require("gulp"),
    less = require("gulp-less"),
    path = require("path"),
    exec = require('child_process').exec;

var paths = {
  less: ['./less/**/*.less'],
  riot: ['./js/**/*.tag']
}

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

// riot-gulp doesn't work with coffee, idk why
gulp.task('riot', function() {
	return exec('riot --type coffee --expr "js"');
});

gulp.task('watch', function() {
	gulp.start('default');
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.riot, ['riot'])
});

gulp.task('default', ['riot', 'less']);
