var request = require('request');

var s = request('http://www.pluralsight.com/');

// data events has been fired while pieces data be sent
// will be fired several times
s.on('data', function(chunk) {
    console.log('Data: ' + chunk);
});

s.on('end', function() {
    console.log('Done!');
});
