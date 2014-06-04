var fs = require('fs');
var tasks = readdirSync('./gulp/tasks');

tasks.forEach(function(task) {
    require('./tasks/' + task);
});
