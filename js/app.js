/*
  Old
var app = app || {};

$(function() {
    new app.PostsView();
});
*/

define(
    [
    'jquery',
    'underscore',
    'backbone',
    'views/postsView'
    ],
    function($, _, Backbone, PostsView) {
        $(function() {
            new PostsView();
        });
    }
);
