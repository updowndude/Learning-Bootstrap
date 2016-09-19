const gulp = require('gulp');
const livereload = require('gulp-livereload');
const sass = require('gulp-ruby-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csswring = require('csswring');
const compiler = require('google-closure-compiler').gulp();

gulp.task('sass', () => {
	const processors = [
		autoprefixer,
		csswring
	 ];

	return sass('sass/myStyle.sass')
    .on('error', sass.logError)
		.pipe(sourcemaps.write())
		.pipe(sourcemaps.write('maps', {
			includeContent: false,
			sourceRoot: 'source'
		}))
		.pipe(postcss(processors))
    .pipe(gulp.dest('public/dist'))
    .pipe(livereload());
});

gulp.task('js', () => {
  return gulp.src('./js/*.js', {base: './'})
      .pipe(compiler({
					compilation_level: 'SIMPLE',
          language_in: 'ECMASCRIPT8',
          language_out: 'ECMASCRIPT5_STRICT',
          js_output_file: 'my-com.js'
        }))
      .pipe(gulp.dest('./public/dist'))
			.pipe(livereload());
});

gulp.task('php', () => {
	return gulp.src('./index.html')
	.pipe(livereload());
});

gulp.task('phper', () => {
	return gulp.src('php/*.php')
	.pipe(livereload());
});

gulp.task('default', () => {
	livereload({start: true});
	gulp.watch('sass/*.sass', ['sass']);
	gulp.watch('js/*.js', ['js']);
	gulp.watch('./*.php', ['php']);
	gulp.watch('php/*.php', ['phper']);
});
