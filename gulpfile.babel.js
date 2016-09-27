import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import csswring from 'csswring';
import cssnext from 'postcss-cssnext';
import webpack from 'gulp-webpack';
import rucksack from 'rucksack-css';
import browserSync from 'browser-sync';
import lost from 'lost';
import connect from 'gulp-connect-php';

browserSync.create();

gulp.task('sass', () => {
	const processors = [
		csswring,
		cssnext,
		rucksack,
		// simlar to bootsrap grids but has more functionality
		lost
	];

	// compile sass to css then use post css
	return gulp.src('sass/myStyle.sass')
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(sourcemaps.write('maps', {
			includeContent: false,
			sourceRoot: 'source'
		}))
		.pipe(postcss(processors))
    .pipe(gulp.dest('public/dist'));
    // .pipe(livereload());
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
		.pipe(gulp.dest('public/dist'));
    // .pipe(livereload());
});

// browserSync if chnage
gulp.task('js-watch', ['js'], () => {
	browserSync.reload();
});

gulp.task('sass-watch', ['sass'], () => {
	browserSync.reload();
});

gulp.task('default', () => {
	connect.server({}, () => {
		browserSync({
			proxy: '127.0.0.1:8000'
		});
	});

	gulp.watch('sass/*.sass', ['sass-watch']);
	gulp.watch('js/*.js', ['js-watch']);
	gulp.watch('./*.php').on('change', () => {
		browserSync.reload();
	});
	gulp.watch('php/*.php').on('change', () => {
		browserSync.reload();
	});
});

gulp.task('mamp', ['config', 'start']);
