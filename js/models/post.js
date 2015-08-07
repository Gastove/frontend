var Backbone = require('backbone');
var marked = require('marked');

var $ = require('jquery');

Backbone.$ = $;

var Post = module.exports = Backbone.Model.extend({
    idAttribute: "name",

    defaults: {
        name: "No name",
        title: "No title",
        created_on: "0",
        body: 'No text'
    },

    parse: function( response ) {
        response.body = marked(response.body);
        return response;
    },

});
