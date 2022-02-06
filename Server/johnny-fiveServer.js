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

     tempMessage = message.toString()
     tempMsg = tempMessage.charAt(2);
     console.log(tempMsg)

     tempMsg = parseInt(tempMsg.toString())
     console.log(tempMsg==="bicept0".normalize());
     switch (tempMsg){
         case 1:
             console.log("bicept contract".normalize());
             relayBicept.open();
             break;
         case 2:
             console.log("bicept expand".normalize());
             relayBicept.close();
             break;
         case 3:
             console.log("forearm contract".normalize());
             relayForearm.open();
             break;
         case 4:
             console.log("forearm contract".normalize());
             relayForearm.close();
             break;
         default:
             console.log("invalid command " + tempMsg);
     }
  });
    
    //connection.write('Hello World!\r\n');
    connection.pipe(connection);
 });
 