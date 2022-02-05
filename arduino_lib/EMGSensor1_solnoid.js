var five = require("johnny-five");
var board = new five.Board();

var contract = false;
var old_contract = false;
var state_lift = "up";

board.on("ready", function(){
  const sensor = new five.Sensor("A0")
  var liftRelay = new five.Relay(13);
  var liftRelay = new five.Relay(12);

  this.repl.inject({
    lift: liftRelay
  });

  sensor.within([100, 150], function(){
    console.log(this.value);
    if(contract != old_contract){
      old_contract  = contract;
    }else{
      contract = ! contract;
      liftRelay.toggle();
      if (state_lift == "up"){
        state_lift = "down";
      }else{
        state_lift = "up";
      }
      console.log(state_lift)
    }
  });


});
 
