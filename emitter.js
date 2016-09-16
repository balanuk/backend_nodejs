var eventEmitter = require('events').EventEmitter;

var emitter = new eventEmitter();

var sayHello = function() {console.log('Hello to you!')};
var sayGoodbye = function() {console.log('Goodbye to you!')};

emitter.on('goodbye', sayGoodbye);
emitter.on('hello', sayHello);

emitter.emit('hello');