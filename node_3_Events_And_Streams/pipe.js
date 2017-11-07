var request = require('request');

// var s = request('http://www.pluralsight.com/');
//
// s.pipe(process.stdout);

var fs = require('fs');
var zlib = require('zlib');

request('http://www.pluralsight.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));
