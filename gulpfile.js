var config = require('./gulp.config')();

var gulp = require('gulp'),
    filter = require('gulp-filter'),
    preprocess = require('gulp-preprocess'),
    file = require('gulp-file'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    order = require('gulp-order'),
    ngHtml2js = require('gulp-ng-html2js'),
    angularFileSort = require('gulp-angular-filesort'),
    del = require('del'),
    es = require('event-stream'),
    mainBowerFiles = require('main-bower-files'),
    ngAnnotate = require('gulp-ng-annotate');

gulp.task('clean-dev', cleanDev);
gulp.task('compile', compile);
gulp.task('dev', ['clean-dev'], compile);

gulp.task('default', ['dev']);

function cleanDev() {
    return del(config.dev.index);
}

function compile() {
    return es.merge(
        buildIndex(),
        buildImages(),
        buildFonts(),
        buildTemplates()
    );
}

function buildIndex() {
    return gulp.src(config.sources.index)
        .pipe(inject(buildScripts(), { relative: true }))
        .pipe(inject(buildVendorScripts(), { relative: true, name: 'vendor' }))
        .pipe(inject(buildStyles(), { relative: true }))
        .pipe(gulp.dest(config.dev.index));
}

function buildImages() {
    return gulp.src(config.sources.images)
        .pipe(gulp.dest(config.dev.images));
}

function buildFonts() {
    return gulp.src(config.sources.fonts)
        .pipe(gulp.dest(config.dev.fonts));
}

function buildTemplates() {
    return gulp.src(config.sources.templates)
        .pipe(gulp.dest(config.dev.templates));
}

function buildStyles() {
    return gulp.src(config.sources.stylesheets)
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.dev.stylesheets));
}

function buildVendorScripts() {
    return gulp.src(config.sources.vendors)
        .pipe(gulp.dest(config.dev.vendors));
}

function buildScripts() {
    var appScripts = pipes.orderingScripts()
        .pipe(preprocess())
        .pipe(ngAnnotate())
        .pipe(gulp.dest(paths.dirBuildAssetsJavascript));

    var buildScriptedTemplates = pipes.scriptedTemplates()
            .pipe(concat('app-templates.js'))
            .pipe(gulp.dest(paths.dirBuildAssetsJavascript));

    return es.merge(
        appScripts,
        buildScriptedTemplates
    );
}