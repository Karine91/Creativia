var gulp = require("gulp"),
  modernizr = require("gulp-modernizr");

gulp.task("modernizr", function() {
  return gulp
    .src(["./app/assets/styles/*.css", "./src/scripts/**/*.js"])
    .pipe(
      modernizr({
        options: ["setClasses"]
      })
    )
    .pipe(gulp.dest("./temp/scripts/"));
});
