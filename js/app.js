/**@jsx React.DOM */

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var PostsView = require('./views/postsView');
var Posts = require('./collections/posts');
var React = require('react');
var BackboneMixin = require('./backbone_mixin');

Backbone.$ = $;

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

React.renderComponent(
        <app posts={new Posts()} />,
    document.getElementById('posts'));
