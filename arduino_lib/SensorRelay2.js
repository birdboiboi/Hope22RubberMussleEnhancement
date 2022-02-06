var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor({
    pin: "A2",
    freq : 1000
  });
  var relay = new five.Relay(9);

  sensor.on("change", function () {
    console.log(this.value);
    var val = this.value;
    if (val > 100){
      relay.close()
    }
     else{
      relay.open()
      
    
      }

    });
      this.repl.inject({
          relay: relay  
    })
  });
