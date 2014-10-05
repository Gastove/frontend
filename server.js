var express = require('express');
var server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(__dirname + '/public'));

server.listen(server.get('port'));
