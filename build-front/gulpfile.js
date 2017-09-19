var fileinclude = require('gulp-file-include'),
    gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    gulpif = require('gulp-if'),
    mqpacker = require('css-mqpacker'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    fs = require('fs'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css'),
    dirs = {
      'source': {
        'html': './templates/',
        'fonts': './fonts/*.*',
        'fontsFolder': './fonts/',
        'sass': ['./sass/**/*.scss'],
        'img': ['./images/*.*'],
        'sassRoot': 'sass/',
        'svgIcons': './images/icons/*.svg'
      },
      'build': {
        'html': '../themes/clinic/templates/',
        'css': '../themes/clinic/css/',
        'js': '../themes/clinic/js/',
        'fonts': '../themes/clinic/fonts/',
        'img': '../themes/clinic/img/'
      }
    };

//fonts
gulp.task('fonts', function() {
  gulp.src(dirs.source.fonts)
    .pipe(gulp.dest(dirs.build.fonts));
});

// icon font
var fontname = 'svgfont';

gulp.task('iconfont', function () {
  return gulp.src([dirs.source.svgIcons])
    .pipe(plumber())
    .pipe(iconfontCss({
      fontName: fontname
      , path: './sass/_svgfont.sass'
      , targetPath: dirs.source.sassRoot + '_svgfont.sass'
      , fontPath: '../fonts/'
      , cssClass: 'icon'
    }))
    .pipe(plumber())
    .pipe(iconfont({
      fontName: fontname
      , prependUnicode: true
      , formats: ['ttf', 'eot', 'woff']
      , normalize: true
      , fontHeight: 1001
      , fontStyle: 'normal'
      , fontWeight: 'normal'
    }))
    .pipe(gulp.dest(dirs.source.fontsFolder));
});

//sass
gulp.task('compileSass', function() {
  
  var processors = [
    autoprefixer({browsers: ['last 2 version', 'IE 10', 'IE 11'], cascade: false}),
    mqpacker({
      sort: function (a, b) {
        a = a.replace(/\D/g, '');
        b = b.replace(/\D/g, '');
        return b - a;
      }
    })
  ];
  
  return gulp.src(dirs.source.sass)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: 'compact'
    }).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirs.build.css));
});

//images
gulp.task('images', function() {
  return gulp.src(dirs.source.img)
    .pipe(plumber())
    .pipe(gulpif(/[.](png|jpeg|jpg|svg)$/, imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()]
    })))
    .pipe(gulp.dest(dirs.build.img));
});

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

gulp.task('watch', function() {
  gulp.watch(dirs.source.sass, ['compileSass']);
  gulp.watch(dirs.source.html, ['fileinclude']);
  gulp.watch(dirs.source.img, ['images']);
  gulp.watch(dirs.source.fonts, ['fonts']);
});

gulp.task('default', [ 'watch', 'fileinclude', 'compileSass', 'images', 'fonts', 'iconfont']);
