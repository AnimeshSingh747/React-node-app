const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', () => {
    console.log('Hello, Event!');
});

eventEmitter.emit('greet');