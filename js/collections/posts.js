var Backbone = require('backbone');
var Post = require('../models/post');

var Posts = module.exports = Backbone.Collection.extend ({

    model: Post,

    // TODO: Control this with an env variable of some sort.
    url: 'http://thermador.herokuapp.com/api/page',

});
