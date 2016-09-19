import gulp from 'gulp';
import livereload from 'gulp-livereload';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csswring from 'csswring';
import webpack from 'gulp-webpack';

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
	return gulp.src('js/bob.js')
		.pipe(sourcemaps.init())
		.pipe(webpack({
			module: {
				loaders: [{
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: ['es2015', 'es2016', 'es2017'],
						plugins: ['transform-runtime']
					}
				}]
			},
			output: {
				filename: 'my-com.js'
			}
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('public/dist'))
    .pipe(livereload());
});

gulp.task('php', () => {
	return gulp.src('./index.php')
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
