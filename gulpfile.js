'use strict';

const gulp = require('gulp');
const del = require('del');

/**** PATHS ****/
const paths = {
  source: require('./build/paths/source.json'),
  dest: require('./build/paths/dest.json'),
  watch: require('./build/paths/watch.json')
};

const ALL_FILES =  '/**';
const EXCLUDE =   '!';

const exclusions = {
  styles :  EXCLUDE + paths.dest.styles + '/font-awesome.min.css'
};

/**** Output file names ****/
const outfiles = {
  styles: 'main'
};

/**** STYLES ****/
const styles = require('./build/styles');

gulp.task('styles:clean', () => {
  del.sync([paths.dest.styles + ALL_FILES, EXCLUDE + paths.dest.styles,  exclusions.styles] );
});

gulp.task('styles:minify', ['styles:clean'], () => {
  var files = paths.source.styles;
  return styles(outfiles.styles, files, true, paths.dest.styles);
});

gulp.task('styles:compile', ['styles:clean'], () => {
  var files = paths.source.styles;
  return styles(outfiles.styles, files, false, paths.dest.styles);
});

/**** TASKS ****/
/* Compile all without minification */
gulp.task('compile', ['styles:compile']);

/* Compile and minify all */
gulp.task('default', ['styles:minify']);

/* Watch for file changes */
gulp.task('watch', ['default'], () => {
  gulp.watch(paths.watch.styles, ['styles:minify']);
});
