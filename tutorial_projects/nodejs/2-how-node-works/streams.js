// for example we need to read a large txt file then send it to the client
const fs = require("fs");

// we can use the object of http module to create server immediately
const server = require("http").createServer();

// so now will listen to the request event using on which the server emit it
server.on("request", (req, res) => {
  // solution 1
  // Problem: need to load the entire data then send them when finished (suffer with large files, or when have multiple requests)
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  ////////////////////////////////////////////////
  // solution 2: Streams
  //   instead of read the data and store it in a variable data, each data you read send it👍
  //   chunk by chunk
  //   so this will emit an event
  //   const readable = fs.createReadStream("test-file.txt");
  //   //  listening to the event using on
  //   readable.on("data", (chunk) => {
  //     // write is writing the response as chunks (streams)
  //     res.write(chunk);
  //   });
  //   //   finish reading the data
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.status(500);
  //     res.end("File not found!");
  //   });
  /////////////////////////////////////////////////////
  //   solution 3: Pipe (BEST SOLUTION)
  //   fix the problem of big pressure
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //   readableSource.pipe(writeableDestination)
});

// run the server and make it listen to emit this event later
// start the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
