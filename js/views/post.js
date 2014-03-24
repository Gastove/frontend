var app = app || {};

app.PostView = Backbone.View.extend({
    tagName: 'div',
    className: 'postsContainer',
    template: _.template( $( '#postTemplate' ).html() ),

    render: function() {

        return this;
    }

});
