var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var post = require('../models/post');

Backbone.$ = $;

var PostView = module.exports = Backbone.View.extend ({
    tagName: 'div',
    className: 'postsContainer',
    template: _.template( $( '#postTemplate' ).html() ),

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );

        return this;
    }

});
