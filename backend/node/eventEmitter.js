import {EventEmitter} from 'events'

const myEmitter = new EventEmitter()

function mygreetfnc(name) {
    console.log('Hello World ' + name)
}

function goodByefnc() {
    console.log('Good Bye')
}

// register event listener

myEmitter.on('greet', mygreetfnc)
myEmitter.on('bye',goodByefnc)

// Emit event
myEmitter.emit('greet', 'Milind')