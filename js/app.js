/**@jsx React.DOM */

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var PostsView = require('./views/postsView');
var Posts = require('./collections/posts');
var React = require('react');

Backbone.$ = $;

var BackboneMixin = {
    componentDidMount: function() {
        // Whenever there may be a change in the Backbone data, trigger a reconcile.
        this.getBackboneModels().forEach(function(model) {
            model.on('add change remove', this.forceUpdate.bind(this, null), this);
        }, this);
    },

    componentWillUnmount: function() {
        // Ensure that we clean up any dangling references when the component is
        // destroyed.
        this.getBackboneModels().forEach(function(model) {
            model.off(null, null, this);
        }, this);
    }
};

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
