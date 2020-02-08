// The Event Module and EventEmitter Class

const EventEmmiter = require('events');
const eventEmmiter = new EventEmmiter();

eventEmmiter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmmiter.emit('tutorial', 1, 2);

class Person extends EventEmmiter {
    constructor(name) {
        super();
        this._name = name
    }

    get name() {
        return this._name;
    }
}

let alfonso = new Person('Alfonso');
let clara = new Person('Clara');
clara.on('name',()=>{
    console.log('my name is ' + clara.name);
})
alfonso.on('name', () => {
    console.log('my name is ' + alfonso.name);
})

alfonso.emit('name');
clara.emit('name');