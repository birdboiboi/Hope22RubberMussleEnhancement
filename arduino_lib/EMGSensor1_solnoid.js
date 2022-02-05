const { Board, Sensor, Relay} = require("johnny-five")
const board = new Board()

var contract = false;

board.on("ready", () => {
  const sensor = new Sensor("A0")
  var liftRelay = new Relay(13);
  var liftRelay = new Relay(12);

  sensor.within([100, 150], function(){

      console.log("Amplify Finger up");
      contract = !contract;


      if(contract){
        liftRelay.on();
        console.log("lift up");
      }else{
        liftRelay.on();
        console.log("lift down");
      }


      this.repl.inject({
        relay: liftRelay
      });
  });
});