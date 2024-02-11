const gulp = require('gulp')
const { series } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS() {
    return tsProject.src()
            .pipe(tsProject())
            .pipe(babel({
                comments: true,
                presets: ['env']
            }))
            .pipe(uglify())
            .pipe(concat('codigo.min.js'))
            .pipe(gulp.dest('build'))
}       

module.exports.default = series(transformacaoTS)