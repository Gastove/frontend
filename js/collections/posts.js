//var app = app || {};

define(
    ['backbone', 'models/post'],
    function(Backbone, Post) {
        return Backbone.Collection.extend ({
        model: Post,
        url: 'http://localhost:5000/api/home/'
        });
    }
);
