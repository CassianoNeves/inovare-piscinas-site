module.exports = {
    app: {
        index : './app/index.html',
        sass : './app/styles/**/*.scss',
        scripts : './app/scripts/**/*.js',
        templates : './app/templates/**/*.html',
        fonts: './app/fonts/**/*',
        images: './app/images/**/*',
        vendor: './app/vendor/**/*.js',
    },
    dist: {
        index : './dist',
        sass : './dist/app',
        scripts : './dist/app',
        templates : './dist/app',
        vendor : './dist/vendor',
        fonts: './dist/fonts',
        images: './dist/images'
    }
};
