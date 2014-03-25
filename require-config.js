var pathPrefix = '../js/';

require.config({
    deps: ['app'],
    baseUrl: './js/',
    paths: {
        jquery: "lib/jquery",
        underscore: "lib/underscore-min",
        backbone: "lib/backbone-min",
        marked: "lib/marked/lib/marked",
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
