import gulp from "gulp";
import {deleteAsync} from 'del';
import browserSync from "browser-sync";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin'
import minify from 'gulp-csso';
import rename from "gulp-rename";
import svgstore from 'gulp-svgstore';
import svgmin from 'gulp-svgmin';
import path from 'path';
import prettier from 'gulp-prettier';
const { src, dest, series, parallel, task } = gulp;
const sass = gulpSass(dartSass);

function styles() {
    return gulp.src('./source/scss/**/*.scss')
               .pipe(sass())
               .pipe(gulp.dest("./build/css"))
               .pipe(minify())
               .pipe(rename({ suffix: ".min", }))
               .pipe(gulp.dest("./build/css"))
               .pipe(browserSync.stream())
  }

function svg() {
  return gulp.src('./source/img/**/*.svg')
             .pipe(svgmin(() => {
              return {
              plugins: [{
              cleanupIDs: {
                  minify: true
              }
          }]
      }
  }))
  .pipe(svgstore())
  .pipe(gulp.dest('./build/img'));
}  

function copy() {
  return gulp.src(['./source/*.html', './source/js/**/*.js'], {base: './source'})
             .pipe(gulp.dest('build'))
             .pipe(browserSync.stream())
}

  function clean() {
    return deleteAsync('build')
  }

  function serve() {
          browserSync.init({
          server: './build'
      });
          browserSync.watch('./source/scss/**/*.scss', series(styles));
          browserSync.watch('./source/*.html', series(copy));
          browserSync.watch('./source/js/**/*.js', series(copy));
  }

  function images() {
    return gulp.src('./source/img/**/*.{jpg,png,svg}')
               .pipe(imagemin([
                mozjpeg({ quality: 75, progressive: true }),
                optipng({ optimizationLevel: 3 }),
                svgo({
                  plugins: [
                      {
                          name: 'removeViewBox',
                          active: true
                      },
                      {
                          name: 'cleanupIDs',
                          active: false
                      }
                  ]
              })
               ]))
               .pipe(gulp.dest('./build/img'))
  }


  function format() {
    return src('source/about.html')
      .pipe(prettier({ singleQuote: true }))
      .pipe(dest('build/test'));
  }
  
 
  
  const build = series(clean, parallel(styles, copy, images, svg), serve);
  export default build;
  export const clearHtml = format;
  