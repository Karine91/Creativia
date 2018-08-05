var gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  del = require("del"),
  svg2png = require("gulp-svg2png");

var config = {
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            return render(sprite)
              .split(".svg")
              .join(".png");
          };
        }
      },
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  },
  shape: {
    spacing: {
      padding: 1
    }
  }
};

gulp.task("beginClean", function() {
  return del(["./temp/sprite", "./app/assets/images/sprites"]);
});

gulp.task("createSprite", function() {
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("./temp/sprite/"));
});

gulp.task("createPngCopy", function() {
  return gulp
    .src("./temp/sprite/css/**/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest("./temp/sprite/css"));
});

gulp.task("copySpriteGraphic", function() {
  return gulp
    .src("./temp/sprite/css/**/*.{svg,png}")
    .pipe(gulp.dest("./app/assets/images/sprites"));
});

gulp.task("copySpriteCSS", function() {
  return gulp
    .src("./temp/sprite/css/*.css")
    .pipe(rename("_sprite.scss"))
    .pipe(gulp.dest("./src/styles/modules"));
});

gulp.task("endClean", function() {
  return del("./temp/sprite");
});

gulp.task(
  "icons",
  gulp.series(
    "beginClean",
    "createSprite",
    "createPngCopy",
    "copySpriteGraphic",
    "copySpriteCSS",
    "endClean"
  )
);
