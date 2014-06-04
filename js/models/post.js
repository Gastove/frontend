//var app = app || {};

define(
    ['backbone', 'marked'],
    function(Backbone, marked) {
        return Backbone.Model.extend ({
            defaults: {
                id: 0,
                title: 'No title',
                body: 'No text',
                tags: 'No tags'
            },
            parse: function( response ) {
                response.body = marked(response.body);
                return response;
            }
        });
    }
);
