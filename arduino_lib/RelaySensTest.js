var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor = new five.Sensor("A0")
  var relay = new five.Relay(13);

  sensor.on("change", function () {
    console.log(this.value);
    var val = this.value;
    function sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
    async function init(){
    if (val > 200){
      relay.close()
      await sleep(3000);
    }
      else{
      relay.open()
      }
    }  
    
    });
      this.repl.inject({
          relay: relay
     
    })
  });
