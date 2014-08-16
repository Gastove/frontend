/**@jsx React.DOM */

var Backbone = require('backbone');
var React = require('react');
var BackboneMixin = require('./backbone_mixin');

var Posts = require('./collections/posts');
var PostsView = require('./views/postsView');
var Sidebar = require('./views/sidebar');

var avatarUrl = "http://www.gravatar.com/avatar/a942cea13e537bb0ea754b6d216c3377?size=160"

var app = React.createClass({
    mixins: [BackboneMixin],

    componentDidMount: function() {
        this.props.posts.fetch();
    },

    getBackboneModels: function() {
        return [this.props.posts];
    },

    render: function () {
        return (
                <PostsView posts={this.props.posts} />
        );
    }
});

React.renderComponent(<app posts={new Posts()} />,
                      document.getElementById('posts'));
