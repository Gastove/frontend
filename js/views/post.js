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
                <div className = "postViepw">
                <h1>I pretty much dont even</h1>
                <h1>{this.props.post.get("id")}</h1>
                <span dangerouslySetInnerHTML={{__html: md}} />
                </div>
        );
    }
});
