var express = require('express');
var path = require ('path');
var server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(__dirname + '/public'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
server.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

server.listen(server.get('port'));
