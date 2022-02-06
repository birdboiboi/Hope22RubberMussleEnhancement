var net = require("net");

var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });

   connection.on('data', function(message) {
    console.log(message.toString());
    message = message.toString();
    switch (message){
        case "isbicept,0":
            console.log("bicept contract");
        case "isbicept,1":
            console.log("bicept expand");
        case "forearm,0":
            console.log("forearm contract");
        case "forearm,1":
            console.log("forearm contract");
        default:
            console.log("invalid command");
    }
 });
   
   //connection.write('Hello World!\r\n');
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is listening');
});