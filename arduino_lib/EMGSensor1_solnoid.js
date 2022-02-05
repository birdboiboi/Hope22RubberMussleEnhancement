var five = require("johnny-five");
var board = new five.Board();

var contract = false;

board.on("ready", function(){
  const sensor = new five.Sensor("A0")
  var liftRelay = new five.Relay(13);
  var liftRelay = new five.Relay(12);

  this.repl.inject({
    lift: liftRelay
  });

  sensor.within([100, 150], function(){

      console.log("Amplify Finger up");
      contract = !contract;

      liftRelay.toggle();

      if(contract){
        console.log("lift up");
      }else{
        console.log("lift down");
      }
  });


});
 
