const gulp = require('gulp');

const server = require('gulp-server-livereload');

gulp.task('build', function(cb){
    console.log('building the website');
    setTimeout(cb, 1200);
    cb();
})

gulp.task('erve', function(cb){
    gulp.src('www').pipe(server({
        livereload: true,
        open: true,

    }));
})

gulp.task('default', gulp.series('build', 'serve'))