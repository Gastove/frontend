var Backbone = require('backbone');
var marked = require('marked');

var Post = module.exports = Backbone.Model.extend ({
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
