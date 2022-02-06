var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor("A0")
  var relay = new five.Relay(13);

  sensor.on("change", function () {
    console.log(this.value);
    var val = this.value;
    var previous = context.get("previous")
    if (val > 2*previous){
      relay.open()
      }
    
    });
      this.repl.inject({
          relay: relay
     
    })
  });
