/**
 * @jsx React.DOM
 */

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var post = require('../models/post');
var React = require('react');

Backbone.$ = $;

var PostView = module.exports = React.createClass({
    render: function() {
        return (
                <div className = "postViepw">
                <h1>I pretty much dont even</h1>
                <h1>{this.props.post.get("id")}</h1>
                <div>{this.props.post.get("body")}</div>
                </div>
        );
    }
});


// React.renderComponent(
//     <h1> Hello World!</h1>,
//     Document.getById('example')
// );

// var PostView = module.exports = Backbone.View.extend ({
//     tagName: 'div',
//     className: 'postsContainer',
//     template: _.template( $( '#postTemplate' ).html() ),

//     render: function() {
//         this.$el.html( this.template( this.model.toJSON() ) );

//         return this;
//     }

// });
