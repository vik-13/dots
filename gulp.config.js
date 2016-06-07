module.exports = function() {
    return {
        sources: {
            index: 'src/index.html',
            scripts: 'src/app/**/*.js',
            stylesheets: [
                'src/app/**/*.scss',
                'src/assets/stylesheets/**/*.scss'
            ],
            images: 'src/assets/images/**/*',
            fonts: 'src/assets/fonts/**/*',
            templates: 'src/app/**/*.tpl.html'
        },
        dev: {
            index: 'dev',
            scripts: 'dev/app',
            stylesheets: 'dev/stylesheets',
            images: 'dev/images',
            fonts: 'dev/fonts',
            templates: 'dev/app',
            vendors: 'dev/vendor'
        }
    };
};