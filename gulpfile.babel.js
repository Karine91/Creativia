import gulp from 'gulp';
import browserSync from 'browser-sync';
import pug from 'gulp-pug';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import plumber from 'gulp-plumber';
import del from 'del';
import sourcemaps from 'gulp-sourcemaps';
import postcss  from 'gulp-postcss';

const paths = {
  styles: {
    src: 'scss/**/*.scss',
    dest: 'app/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'app/scripts/'
  },
  images: {
    src: 'app/images/**/*.*',
    dest: 'dist/images/'
  },
  fonts: {
    src: 'app/fonts/*.*',
    dest: 'dist/fonts/'
  },
  templates: {
    src: ['index.pug', 'templates/*.pug'],
    dest: 'app/'
  }
};

browserSync.create();

export const clean = () => del([ 'dist' ]);

//pug
export function templates() {
  return gulp.src('./index.pug')
      .pipe(plumber({
          errorHandler: function(error){console.log(error); this.end();}
      }))
      .pipe(pug({pretty: true}))
      .pipe(gulp.dest(paths.templates.dest))
};

//fonts
export function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
};

//images
export function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
};


//STYLES
export function styles() {
  return gulp.src('scss/main.scss')
      .pipe(plumber({
          errorHandler: function(error){console.log(error); this.end();}
      }))
      .pipe(sass())
      .pipe( sourcemaps.init() )
      .pipe( postcss([ require('precss'), require('autoprefixer')]) )
      .pipe( sourcemaps.write('.') )
      .pipe( gulp.dest(paths.styles.dest));
};

export function scripts() {
  return gulp.src('js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest));
}

export function watchFiles() {
  gulp.watch(paths.templates.src, gulp.series(templates, browserSync.reload));
  gulp.watch(paths.scripts.src, gulp.series(scripts, browserSync.reload));
  gulp.watch(paths.styles.src, gulp.series(styles, browserSync.reload));
}

//Build
export function build() {
  return gulp.src('app/**/*.*')
    .pipe(gulpif('main.js', 
      sourcemaps.init(), 
      uglify(), 
      sourcemaps.write('.'),  
      rename({
        basename: 'main',
        suffix: '.min'
        }))
    )
    .pipe(gulpif('main.css', 
      sourcemaps.init(), 
      cleanCSS(), 
      sourcemaps.write('.'),  
      rename({
        basename: 'main',
        suffix: '.min'
        }))
    )
    .pipe(gulp.dest('dist'));
};

//Server
export function server(){
  browserSync.init({
      server: {
        baseDir: "./app"
      }
  });
};

//default
gulp.task('default', gulp.series(templates, styles, scripts, gulp.parallel(server, watchFiles)));

//build
gulp.task('build', gulp.series(clean, templates, styles, scripts, gulp.parallel(build, fonts, images)));

