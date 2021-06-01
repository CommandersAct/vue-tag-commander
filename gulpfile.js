var gulp = require('gulp');
var minify = require('gulp-minify');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
 
gulp.task('scripts', function() {
  return gulp.src('./lib/*.js')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build-es5', function() {
    console.log("building es5 lib");
    // converting to ES5
    gulp.src('src/*.js')
        .pipe(babel({
            presets: ['env', 'es2015', 'vue']
        }))
        .pipe(minify({
        ext:{
            min:'.es5.min.js'
        },
        exclude: ['tasks'],
        noSource: true
    }))
    .pipe(concat('vue-tag-commander.es5.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-es6', function() {
    console.log("building es6 lib");
    gulp.src('src/*.js')
        .pipe(minify({
        ext:{
            min:'.es6.min.js'
        },
        exclude: ['tasks'],
        noSource: true
    }))
    .pipe(concat('vue-tag-commander.es6.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('build-umd', function() {
    console.log("building umd lib");
    // converting to ES5

    gulp.src('package.umd.json')
    .pipe(concat('package.json'))
    .pipe(gulp.dest('umd'));

    gulp.src('src/*.js')
    .pipe(babel({
        presets: ['env', 'es2015', 'vue'],
        plugins: ["transform-es2015-modules-umd"]
    }))
    .pipe(minify({
    ext:{
        min:'.umd.min.js'
    },
    exclude: ['tasks'],
    noSource: true
}))
.pipe(concat('index.js'))
.pipe(gulp.dest('umd'));

});


gulp.task('default', ['build-es5', 'build-es6', 'build-umd']);