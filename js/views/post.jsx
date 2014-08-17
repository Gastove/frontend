/**
 * @jsx React.DOM
 */

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var post = require('../models/post');
var React = require('react');
var Marked = require('marked');

Backbone.$ = $;

var PostView = module.exports = React.createClass({
    render: function() {
        var md = Marked(this.props.post.get("body"));
        return (
                <div>
                <h2>I pretty much dont even</h2>
                <h2>{this.props.post.get("title")}</h2>
                <h3>{this.props.post.get("created_on")}</h3>
                <span dangerouslySetInnerHTML={{__html: md}} />
                </div>
        );
    }
});
