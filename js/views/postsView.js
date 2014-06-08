/**@jsx React.DOM */

var Backbone = require('backbone');
var $ = require('jquery');
var PostView = require('./post');
var Posts = require('../collections/posts');
var React = require('react');

Backbone.$ = $;

var PostsView = module.exports = React.createClass({

    render: function() {
        var nodes = this.props.posts.map(function(post) {
            return <PostView post={post} />
        });
        return (
                <div className = "postsview">
                What was that noise?
                <h3> ...posts? NORP </h3>
                {nodes}
                </div>
        );
    },
});
