var gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  del = require("del"),
  cssnano = require("gulp-cssnano"),
  uglify = require("gulp-uglify"),
  browserSync = require("browser-sync").create(),
  webpack = require("webpack"),
  pug = require("gulp-pug");

gulp.task("previewDist", function() {
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
});

gulp.task("deleteDistFolder", function() {
  return del("./dist");
});

gulp.task("copyGeneralFiles", function() {
  var pathsToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/assets/images/**"
  ];

  return gulp.src(pathsToCopy).pipe(gulp.dest("./dist"));
});

gulp.task("compressedStyles", function() {
  return gulp
    .src("./dist/*.css")
    .pipe(cssnano())
    .pipe(gulp.dest("./dist/"));
});

gulp.task("prodScripts", function(done) {
  webpack(require("../../webpack.config.js")("production"), function(
    err,
    stats
  ) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    done();
  });
});

gulp.task("compressedScripts", function(done) {
  return gulp
    .src("./app/assets/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/assets/scripts/"));
});

gulp.task("optimazeImages", function() {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/icons",
      "!./app/assets/images/icons/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("copyTemplates", function() {
  return gulp
    .src("./src/index.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist"));
});

gulp.task(
  "build",
  gulp.series(
    "deleteDistFolder",
    "copyTemplates",
    "styles",
    "optimazeImages",
    "compressedStyles",
    "prodScripts",
    "compressedScripts"
  )
);
