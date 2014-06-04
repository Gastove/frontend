var Backbone = require('backbone');
var $ = require('jquery');
var PostView = require('./post');
var Posts = require('../collections/posts');

Backbone.$ = $;

var PostsView = module.exports = Backbone.View.extend ({
    el: '#posts',

    initialize: function( initialPosts ) {
        this.collection = new Posts( initialPosts );
        this.collection.fetch( {reset: true} );
        this.render();

        this.listenTo( this.collection, 'add', this.renderPost );
        this.listenTo( this.collection, 'reset', this.render );
    },

    render: function() {
        this.collection.each( function( item )  {
            this.renderPost( item );
        }, this );
    },

    renderPost: function( item ) {
        var postView = new PostView({
            model: item
        });
        this.$el.append( postView.render().el );
    }
});
