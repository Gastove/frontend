var app = app || {};

app.Posts = Backbone.Collection.extend({
    model: app.Post,
    url: 'http://localhost:5000/api/home'
});
