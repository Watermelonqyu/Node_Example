var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Resource(m) {
    var maxEvents = m;
    var self = this;

    process.nextTick(function() {
        var count = 0;

        // because resource inherits from EventEmitter, so we are calling emits on self
        self.emit('start');
        var t = setInterval(function() {
            self.emit('data', ++count);
            if (count === maxEvents) {
                self.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
};

// We want our resource modile inherits from EventEmitter
util.inherits(Resource, EventEmitter);

module.exports = Resource;
