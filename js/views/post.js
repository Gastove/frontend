var app = app || {};

app.PostView = Backbone.View.extend({
    tagName: 'div',
    className: 'postsContainer',
    template: _.template( $( '#postTemplate' ).html() ),

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    }

});
