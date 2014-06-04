/*
  App entry point.
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
