const gulp = require('gulp');
const liveServer = require('gulp-live-server');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');

gulp.task('live', () => {
  const server = new liveServer('./server/main.js');

  server.start();
})

gulp.task('bundle', () => {
  return browserify({
      entries: 'app/main.jsx',
      debug: true,
    })
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./.tmp'));
})

gulp.task('serve', ['live', 'bundle'], () => {
  browserSync.init(null, {
    proxy: "http://alphorm-omnizya.c9users.io:8080",
    port: 8081,
    ui: {
      port: 8082,
      weinre: {
        port: 8083
      }
    }
  })
});
