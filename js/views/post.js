//var app = app || {};

define(
    ['backbone', 'jquery', 'underscore', 'models/post'],
    function(Backbone, $, _, Post) {
        return Backbone.View.extend ({
            tagName: 'div',
            className: 'postsContainer',
            template: _.template( $( '#postTemplate' ).html() ),

            render: function() {
                this.$el.html( this.template( this.model.toJSON() ) );

                return this;
            }

        });
    }
);
