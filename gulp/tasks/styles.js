var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefexer = require("autoprefixer"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  importCss = require("gulp-import-css");

gulp.task("styles", function() {
  return gulp
    .src("./src/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on("error", function(err) {
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(importCss())
    .pipe(postcss([autoprefexer]))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./app/assets/styles"));
});
