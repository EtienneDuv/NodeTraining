const   events = require('events'),
        util = require('util');


var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);


var etienne = new Person('Etienne'),
    marie = new Person('Marie'),
    clemi = new Person('Clémi');

let people = [etienne, marie, clemi];


people.forEach(person => {
    person.on('speak', function (msg) {
       console.log(`${person.name} said: ${msg}`); 
    });
});

etienne.emit('speak', 'Wesh les kheys !');