var Resource = require('./resource');

var r = new Resource(7);

r.on('start', function() {
    console.log('started!');
});

r.on('data', function(d) {
    console.log('recieved: ' + d);
});

r.on('end', function(t) {
    console.log('done with ' + t + ' data events');
});
