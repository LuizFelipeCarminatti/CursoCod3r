const gulp = require('gulp')
const { series, parallel } = require('gulp')

function copiar(cb) {
    /* gulp.src(['pastaA/arquivo1.txt', 'pastaB/arquivo2.txt']) */
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

module.exports.default = series(copiar)