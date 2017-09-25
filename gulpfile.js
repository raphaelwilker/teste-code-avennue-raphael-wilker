var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
//var server = require('gulp-server-livereload');

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('ngdocs', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  return gulp.src([
  	'./view/**/*.js',
  	'./js/**/*.js',
  	'./js/**/**/*.js'])
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('./docs'));
});

gulp.task('compress', function () {
  
  	gulp.src([
	  	'./js/controller/**/*.js',
	  	'./view/**/*.js',
	  	'./js/*.js'])
  	    .pipe(concat('test-ui-chalenge-min.js'))
        .pipe(uglify({mangle: false}))
        .pipe(gulp.dest('./bin/js'))

    gulp.src(['./js/libs/angular/angular.min.js'])    
		.pipe(concat('angular.js'))
	    .pipe(gulp.dest('./bin/js'))

	gulp.src(['./js/libs/angular/modules/*.js'])
		.pipe(concat('angular-modules.js'))
	    .pipe(gulp.dest('./bin/js'))

	gulp.src(['./js/libs/jquery/**/*.js',
		'./js/libs/bootstrap/**/*.js'])    
		.pipe(concat('libs.js'))
	    .pipe(gulp.dest('./bin/js'))        

	gulp.src(['./css/**/*.css'])
		.pipe(concat('test-ui-chalenge-min.css'))
		.pipe(cssMin())
		.pipe(gulp.dest('./bin/css'))
  
  	gulp.src(['./css/bootstrap/fonts/*.woff2'])  
    	.pipe(gulp.dest('./bin/fonts'))

  	gulp.src(['./css/bootstrap/fonts/*.woff'])  
   		.pipe(gulp.dest('./bin/fonts'))
    
  	gulp.src(['./css/bootstrap/fonts/*.ttf'])  
    	.pipe(gulp.dest('./bin/fonts'))    

});

 
//gulp.task('webserver', function() {
//  gulp.src('app')
//    .pipe(server({
//      livereload: true,
//      directoryListing: true,
//      open: true
//    }));
//});