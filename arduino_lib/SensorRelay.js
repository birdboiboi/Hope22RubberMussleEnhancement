var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var sensor1 = new five.Sensor({
    pin: "A0",
    freq : 1000
  });
  var sensor2 = new five.Sensor({
    pin: "A7",
    freq : 1000
  });
  var relay1 = new five.Relay(13);
  var relay2 = new five.Relay(12);

  sensor1.on("change", function () {
    console.log(this.value);
    var val1 = this.value;
    if (val1 > 200){
      relay1.close()
    }
     else{
      relay1.open()
      
    
      }

      sensor2.on("change", function () {
        console.log(this.value);
        var val2 = this.value;
        if (val2 > 200){
          relay2.close()
        }
         else{
          relay2.open()
          
        
          }
    });
   
  });
});
