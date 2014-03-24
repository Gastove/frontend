var app = app || {};

app.PostsView = Backbone.View.extend({
    el: '#posts',

    initialize: function( initialPosts ) {
        this.collection = new app.Posts( initialPosts );
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
        var postView = new app.PostView({
            model: item
        });
        this.$el.append( postView.render().el );
    }
});
