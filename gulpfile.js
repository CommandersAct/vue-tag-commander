var gulp = require('gulp');
var minify = require('gulp-minify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var rollup = require('@rollup/stream');
var source = require('vinyl-source-stream');


gulp.task('scripts', function () {
    return gulp.src('./lib/*.js')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build-es5', function () {
    console.log("building es5 lib");
    // converting to ES5
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['env', 'es2015', 'vue']
        }))
        .pipe(minify({
            ext: {
                min: '.es5.min.js'
            },
            exclude: ['tasks'],
            noSource: true
        }))
        .pipe(concat('index.es5.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-es6', function () {
    console.log("building es6 lib");
    gulp.src('src/*.js')
        .pipe(minify({
            ext: {
                min: '.es6.min.js'
            },
            exclude: ['tasks'],
            noSource: true
        }))
        .pipe(concat('index.es6.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-cjs', function () {
    console.log("building umd lib");

    rollup({
        input: './src/index.js',
        output: { format: 'cjs' },
      })
  
      // give the file the name you want to output with
      .pipe(source('index.js'))
  
      // and output to ./dist/app.js as normal.
      .pipe(gulp.dest('./cjs'));


    gulp.src('package.cjs.json')
        .pipe(concat('package.json'))
        .pipe(gulp.dest('cjs'));

});


gulp.task('default', ['build-es5', 'build-es6', 'build-cjs']);