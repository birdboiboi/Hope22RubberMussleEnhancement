var five = require("johnny-five");
var express = require("express");
var app = express();
var board = new five.Board();
const port = 8080

board.on("ready", function(){
    var led = new five.Led(13);
    led.on();

    this.repl.inject({
        led: led
      });

}); 


app.get('/', (req, res) => {
    res.send('Hello World!');
    led.off()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



