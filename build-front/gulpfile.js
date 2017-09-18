var fileinclude = require('gulp-file-include'),
    gulp = require('gulp');

gulp.task('fileinclude', function() {
    gulp.src([
        './templates/page--front.html.twig',
        './templates/page.html.twig'
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('../themes/clinic/templates/'));
});

gulp.task('default', [ 'fileinclude' ]);