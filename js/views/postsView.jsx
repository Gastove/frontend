/**@jsx React.DOM */

var Backbone = require('backbone');
//var $ = require('jquery');
var PostView = require('./post');
var Posts = require('../collections/posts');
var React = require('react');

var PostsView = module.exports = React.createClass({

    render: function() {

        var show = this.props.show;
        var nodes = this.props.posts.map(
            function(post) {
                return <PostView key={post.id} post={post} show={show}/>
            }
        );

        return (
            <div className = "posts-view">
              {nodes}
            </div>
        );
    },
});
