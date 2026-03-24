//Using the EventEmitter class
const EventEmitter = require("events");

//Create a new event emitter instance
//This object can publish events and allow listeners to subscribe
const orderEmitter = new EventEmitter();

//Register a listener for the "orderPlaced" event.
//whenever the event is emitted, the function will execute.
//once() registers a listener that automatically removes itself after running for the first time.

orderEmitter.once("OrderPlaced",function(orderId,name){
    console.log("Hello",name);
    console.log("Waiting for Restaurant to accept order.",orderId);
});

orderEmitter.on("OrderPlaced",function(orderId,name,orderValue){
    console.log("Hello",name);
    console.log("Restaurant accepted order.",orderId);
    console.log("Bill Amount:",orderValue);
});

orderEmitter.on("OrderPlaced",function(orderId){
    console.log("Assigning delivery partner.");
});

orderEmitter.on("OrderPlaced",function(orderId){
    console.log("Bharath is delivering your order.",orderId);
});

//Emit the event with extra data
//The listener receives the orderId value.
orderEmitter.emit("OrderPlaced","ORD-2403001","Bindu",1000);
orderEmitter.emit("OrderPlaced","ORD-2403001","Bindu",1000);
