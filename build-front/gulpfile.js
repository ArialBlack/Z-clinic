'use strict';
var fileinclude = require('gulp-file-include'),
	gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-sass'),
	sassGlob = require('gulp-sass-glob'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	plumber = require('gulp-plumber'),
	// connect = require('gulp-connect'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	gulpif = require('gulp-if'),
	mqpacker = require('css-mqpacker'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	// babel = require('gulp-babel'),
	// fs = require('fs'),
	iconfont = require('gulp-iconfont'),
	iconfontCss = require('gulp-iconfont-css'),
	runSequence = require('run-sequence'),
	dirs = {
		'source': {
			'html': ['./templates/**/*.twig', './page_parts/**/*.twig'],
			'fonts': './fonts/*.*',
			'fontsFolder': './fonts/',
			'sass': ['./sass/**/*.scss'],
			'sassWatch': ['./sass/**/*.scss', './page_parts/**/*.scss'],
			'img': ['./images/*.*', './images/**/*.*', './images/*/*.*'],
			'js': './page_parts/**/*.js',
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

gulp.task('iconfont', function() {
	return gulp.src([dirs.source.svgIcons])
		.pipe(plumber())
		.pipe(iconfontCss({
			fontName: fontname,
			path: './helpers/_svgfont.sass',
			targetPath: '../' + dirs.source.sassRoot + '_svgfont.sass',
			fontPath: '../fonts/',
			cssClass: 'icon'
		}))
		.pipe(iconfont({
			fontName: fontname,
			prependUnicode: true,
			formats: ['ttf', 'eot', 'woff', 'woff2'],
			normalize: true,
			fontHeight: 1001,
			fontStyle: 'normal',
			fontWeight: 'normal'
		}))
		.pipe(gulp.dest(dirs.source.fontsFolder));
});

//sass
gulp.task('compileSass', function() {

	var processors = [
		autoprefixer({ browsers: ['last 2 version', 'IE 10', 'IE 11'], cascade: false }),
		mqpacker({
			sort: function(a, b) {
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

//templates
gulp.task('fileinclude', function() {
	gulp.src(['./templates/*.twig'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest('../themes/clinic/templates/'));
});

//scripts
gulp.task('scripts', function() {
	var jsFileName = "main.js";
	return gulp.src(dirs.source.js)
		.pipe(plumber())
		.pipe(concat(jsFileName))
		.pipe(uglify())
		.pipe(gulp.dest(dirs.build.js));
});

gulp.task('watch', function() {
	gulp.watch(dirs.source.sassWatch, ['compileSass']);
	gulp.watch(dirs.source.js, ['scripts']);
	gulp.watch(dirs.source.html, ['fileinclude']);
	gulp.watch(dirs.source.img, ['images']);
	gulp.watch(dirs.source.fonts, ['fonts']);
});

gulp.task('default', function() {
	runSequence(
		'iconfont', 'images', 'compileSass', 'fonts', 'fileinclude', 'scripts', 'watch'
	);
});
