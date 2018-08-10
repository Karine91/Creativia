var gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  del = require("del"),
  svgmin = require("gulp-svgmin"),
  cheerio = require("gulp-cheerio"),
  replace = require("gulp-replace");
path = require("path");

var config = {
  mode: {
    symbol: {
      sprite: "sprite.svg",
      render: {
        scss: {
          template: "./gulp/templates/sprite.scss",
          dest: "./_sprite.scss"
        }
      }
    }
  }
};

gulp.task("beginClean", function() {
  return del("./app/assets/images/sprites");
});

gulp.task("createSprite", function() {
  return (
    gulp
      .src("./app/assets/images/icons/**/*.svg")
      .pipe(
        svgmin({
          js2svg: {
            pretty: true
          }
        })
      )
      // remove all fill, style and stroke declarations in out shapes
      .pipe(
        cheerio({
          run: function($) {
            $("[fill]").removeAttr("fill");
            $("[stroke]").removeAttr("stroke");
            $("[style]").removeAttr("style");
          },
          parserOptions: { xmlMode: true }
        })
      )
      // cheerio plugin create unnecessary string '&gt;', so replace it.
      .pipe(replace("&gt;", ">"))
      // build svg sprite
      .pipe(svgSprite(config))
      .pipe(gulp.dest("./app/assets/images/sprites/"))
  );
});

gulp.task("copyScssSprite", function() {
  return gulp
    .src("./app/assets/images/sprites/symbol/_sprite.scss")
    .pipe(gulp.dest("./src/styles/modules/"));
});

gulp.task("endClean", function() {
  return del("./app/assets/images/sprites/symbol/_sprite.scss");
});

gulp.task(
  "icons",
  gulp.series("beginClean", "createSprite", "copyScssSprite", "endClean")
);
