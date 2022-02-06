const { Board, five } = require("johnny-five")
const board = new Board()

board.on("ready", () => {
  const sensor = new five.Sensor("A0")
  const relay = new five.Relay(13);

  sensor.on("change", function () {
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
    })
  });f
