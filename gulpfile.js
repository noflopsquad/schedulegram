var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

var specsPath = 'specs/**/*.js';
var srcPath = 'src/**/*.js';

gulp.task('test',function(){
	gulp.src(specsPath).pipe(jasmine({verbose: true, includeStackTrace: true}));
})

gulp.task('tdd',['test'],function(){
	gulp.watch(srcPath,['test']);
})

process.on('uncaughtException',function(e){
	console.error(e.stack);
})