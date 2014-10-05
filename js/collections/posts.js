var Backbone = require('backbone');
var Post = require('../models/post');

var Posts = module.exports = Backbone.Collection.extend ({

    model: Post,

    url: 'http://thermador.herokuapp.com/api/page',

});
