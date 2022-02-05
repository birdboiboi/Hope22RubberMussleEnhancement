const { Board, Sensor } = require("johnny-five")
const board = new Board()

board.on("ready", () => {
  const sensor = new Sensor("A0")
  floatVoltage = sensor*(5.0/1023.0)
  //sensor.within([100, 150], function(){
      console.log("Amplify Finger Movement")
  })
})