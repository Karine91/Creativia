const gulp = require("gulp");

gulp.task(
  "default",
  gulp.series(gulp.parallel("templates", "styles", "scripts"), "watch")
);
