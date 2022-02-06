var five = require("johnny-five");
var net = require("net");

var board = new five.Board();
var relayForearm;
var relayBicept;


board.on("ready", function(){
    relayForearm = new five.Relay(13);
    relayBicept= new five.Relay(12);
    
    server.listen(8080, function() { 
        console.log('server is listening');
    });

   
}); 

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
             relayBicept.open();
         case "isbicept,1":
             console.log("bicept expand");
             relayBicept.close();
         case "forearm,0":
             console.log("forearm contract");
             relayForearm.open();
         case "forearm,1":
             console.log("forearm contract");
             relayForearm.close();
         default:
             console.log("invalid command");
     }
  });
    
    //connection.write('Hello World!\r\n');
    connection.pipe(connection);
 });
 