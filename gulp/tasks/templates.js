var gulp = require("gulp"),
  pug = require("gulp-pug");

gulp.task("templates", function() {
  return gulp
    .src("./src/**/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./app"));
});
