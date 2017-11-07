// process is a buildin module and no need to require
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
    process.stdout.write('Data ----> ' + chunk);
});

process.stdin.on('end', function() {
    process.stderr.write('End!\n');
});

process.on('SIGTERM', function() {
    process.stderr.write('Why?');
});

console.log('Node is running as process #' + process.pid);
