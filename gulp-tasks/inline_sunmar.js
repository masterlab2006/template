var gulp = require('gulp');
var fileInline = require('gulp-file-inline');
var rep = require('gulp-replace-image-src');
import rename from "gulp-rename";
import replace from "gulp-replace";

gulp.task('inline_sunmar', function() {
    return gulp
        .src('dist/sunmar*.content.html')
        .pipe(rep({
            prependSrc : '//cdn.sunmar.ru/content/cms/russia/homepagenew/',
            keepOrigin : false
        }))
        .pipe(fileInline())
        .pipe(replace("<html><head></head><body>", ""))
        .pipe(replace("</body></html>", ""))
        .pipe(replace("./img/content/sunmar/", "//cdn.sunmar.ru/content/cms/russia/homepagenew/"))
        .pipe(replace("img/content/sunmar/", "//cdn.coral.ru/content/cms/russia/homepagenew/"))
        .pipe(rename({ suffix: ".inline" }))
        .pipe(gulp.dest('dist/inline'));
});