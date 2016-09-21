import gulp from 'gulp';
import livereload from 'gulp-livereload';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import csswring from 'csswring';
import cssnext from 'postcss-cssnext';
import webpack from 'gulp-webpack';
import rucksack from 'rucksack-css';
// another postcss adder
// import lost from 'lost';

gulp.task('sass', () => {
	const processors = [
		csswring,
		cssnext,
		rucksack
		// simlar to bootsrap grids but has more functionality
		// lost
	];

	// compile sass to css then use post css
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

// convert new JavaSciprt into older version
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

// livereload if chnage in php file
gulp.task('php', () => {
	return gulp.src('./index.php')
	.pipe(livereload());
});

gulp.task('phper', () => {
	return gulp.src('php/*.php')
	.pipe(livereload());
});

// continuously watch select areas then fire off a funcation
gulp.task('default', () => {
	livereload({start: true});
	gulp.watch('sass/*.sass', ['sass']);
	gulp.watch('js/*.js', ['js']);
	gulp.watch('./*.php', ['php']);
	gulp.watch('php/*.php', ['phper']);
});
