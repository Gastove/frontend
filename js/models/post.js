var app = app || {};

app.Post = Backbone.Model.extend({
    defaults: {
        title: 'No title',
        body: 'No text',
        tags: 'No tags'
    },
    parse: function( response ) {
        response['body'] = marked(response['body']);
        return response;
    }
});
