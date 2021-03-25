const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync')
function style(){
    return gulp.src('./**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
}
function watch(){
    
    gulp.watch('./**/*.scss', style);
   

}
exports.watch = watch;
exports.style = style;