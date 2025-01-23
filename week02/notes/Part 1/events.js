const EventEmitter = require("events");
const myEmitter = new EventEmitter(); 
// define an event listener 
myEmitter.on("test", ()=>{
    console.log('hello, world');
    
}); 
// // emit an event with an optional data payload 
myEmitter.emit("event-name", payload);

myEmitter.emit('test1')
myEmitter.emit('test2')
myEmitter.emit('test3')
myEmitter.emit('test4')
myEmitter.emit('test5')
myEmitter.emit('test6')
myEmitter.emit('test7')