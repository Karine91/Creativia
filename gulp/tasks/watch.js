var gulp = require("gulp"),
  browserSync = require("browser-sync").create();

gulp.task("watch", function() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
  gulp
    .watch("./src/**/*.pug")
    .on("change", gulp.series("templates", browserSync.reload));
  gulp.watch("./src/styles/**/*.scss", gulp.series("styles", "cssInject"));
  gulp.watch("./src/scripts/**/*.js", gulp.series("scripts", "scriptsRefresh"));
});

gulp.task("scriptsRefresh", function(done) {
  browserSync.reload();
  done();
});

gulp.task("cssInject", function() {
  return gulp.src("./app/assets/styles/main.css").pipe(browserSync.stream());
});
