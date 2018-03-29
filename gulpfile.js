
var gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  spritesmith = require('gulp.spritesmith'),
  imagemin = require('gulp-imagemin');

gulp.task('autoprefix', function() {
    gulp.src('app/css/style.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('dist/css'))
  }
);

gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
  gulp.watch('app/scss/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});


gulp.task('build', ['watch', 'sass', 'autoprefix'], function() {
  var buildCss = gulp.src(['app/css/normalize.css'])
    .pipe(gulp.dest('dist/css'));
  var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));
  var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
  var buildImg = gulp.src('app/img/**/*')
    .pipe(gulp.dest('dist/img'));
  var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('sprite', function() {
  var spriteData =
    gulp.src('app/img/sprite/*.*') // путь, откуда берем картинки для спрайта
      .pipe(spritesmith({
        imgName: '../img/sprite.png',
        cssName: '_sprite.scss',
        algorithm: 'binary-tree',
        cssVarMap: function(sprite) {
          sprite.name = 's-' + sprite.name;
        }
      }));

  spriteData.img.pipe(gulp.dest('app/img/')); // путь, куда сохраняем картинку
  spriteData.css.pipe(gulp.dest('app/scss/')); // путь, куда сохраняем стили
});

gulp.task('imagemin', function () {
    gulp.src('app/img/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
  }
);
