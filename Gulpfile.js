var gulp = require("gulp"),
    less = require("gulp-less"),
    path = require("path"),
    exec = require("child_process").exec,
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify");

var paths = {
  less: ['./less/**/*.less'],
  riot: ['./riot/**/*.tag'],
  riotcompiled: ['./riot/**/*.js']
}

gulp.task('less', function() {
  return gulp.src(paths.less)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'))
});

gulp.task('riot', function() {
  gulp.start('riotcompile');
  return gulp.src(paths.riotcompiled)
    .pipe(concat('./app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
});

// riot-gulp doesn't work with coffee, idk why
gulp.task('riotcompile', function() {
  exec('riot --type coffee --expr "riot"');
})

gulp.task('watch', ['default', 'watchers'])

gulp.task('watchers', function() {
  gulp.watch(paths.less, ['less']);
  gulp.watch(paths.riot, ['riot']);
});

gulp.task('default', ['riot', 'less']);