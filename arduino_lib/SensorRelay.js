var five = require("johnny-five");
var board = new five.Board();

var contract = false;
var old_contract = false;
var state_lift = "up";

board.on("ready", function(){
  const sensorForearm = new five.Sensor({
                                          pin:"A0",
                                          threshold:50,
                                        });
  var liftRelay = new five.Relay(13);

    sensor: sensorForearm

  });
  

  sensorForearm.on("change", function () {
    console.log(this.value);
    var val = this.value;

    if (val > 100){
      relay.on()
      }else{
        relay.off()
      }
      this.repl.inject({
          relay: relay
      });
    
  });


