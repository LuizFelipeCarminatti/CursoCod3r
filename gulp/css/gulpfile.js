const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS(params) {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglifyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build'))
}

function copiar(cb) {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
    
    return cb()     
}
module.exports.default = series(transformacaoCSS, copiar)
