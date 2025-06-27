const EventEmitter = require("events");
const http = require("http");
// make separate class inherit from the EventEmitter class
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

// make object can emit named event
const myEmitter = new Sales();
// const myEmitter = new EventEmitter();

// so here on listen to the emit event
// use on method in the myEmitter object
// and react then
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Mohammed");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock`);
});

// so here we make an event and emit it
// as we click on a button
// can pass argument to the listener to pass to the callback function
myEmitter.emit("newSale", 9);

//////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request Received!");
  res.end("Request Received");
});

server.on("request", (req, res) => {
  console.log("Another request 😁");
});

server.on("close", () => {
  console.log("Server closed");
});

// run the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});
