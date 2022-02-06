const { Board, Sensor } = require("johnny-five")
const board = new Board()

board.on("ready", () => {
  const sensor = new Sensor("A0")

  sensor.on("chnage", function() {
      console.log(this.value)
  })
})