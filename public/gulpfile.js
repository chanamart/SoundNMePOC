var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')



gulp.task('app', function () {
  gulp.src(['views/**/*.js'])
    
    .pipe(sourcemaps.init())
	    .pipe(concat('app.js'))
	    .pipe(ngAnnotate())
	    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
})


gulp.task('watch', ['app'], function () {
  gulp.watch('views/**/*.js', ['app'])
})
