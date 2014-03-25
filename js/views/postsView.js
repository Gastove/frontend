//var app = app || {};

define(
    ['backbone', 'jquery', 'views/post', 'collections/posts'],
    function(Backbone, $, PostView, Posts) {
        return Backbone.View.extend ({
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
    }
);
