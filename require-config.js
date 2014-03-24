require.config({
    baseURL: 'js/lib',
    paths: {
        jquery: "jquery.min.js",
        underscore: "underscore-min.js",
        backbone: "backbone-min.js",
        marked: "marked/index.js",
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        }
    }
});
