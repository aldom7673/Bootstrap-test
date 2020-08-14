'use strict';


var gulp = require('gulp'),
    watch = require('gulp'),
    series = require('gulp'),
    src = require('gulp'),
    dest = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

function sassFn() {
    return(
    	gulp.src('./css/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./css'))
        );
}

function browserSyncFn(done) {
    var files = [
        './*.html',
        './css/*.css',
        './js/*.js',
        './img/*.{png,jpg,gif}'
    ];
    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
    done();
}

function sassWatch(){
    gulp.watch(['./css/*.scss'], sassFn)
}

exports.default = gulp.series(browserSyncFn, sassWatch);