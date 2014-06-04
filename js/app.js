var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var PostsView = require('./views/postsView');

Backbone.$ = $;

$(function() {
    new PostsView();
});
