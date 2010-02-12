HOST = null; // localhost
PORT = 8003;

var sys = require("sys");
var tcp = require('tcp');

var server = tcp.createServer(function (socket) {
  socket.setEncoding("utf8");
  socket.addListener("connect", function () {
    sys.puts("--->>> client connected")
    socket.send("HELO\r\n");
  });
  socket.addListener("receive", function (data) {
    var message = data.replace(/(\r\n|[\r\n])/g, ""); // Remove EOL Characters
    sys.puts(message);
    socket.send("recv\r\n");
  });
  socket.addListener("eof", function () {
    sys.puts("--->>> client disconnected")
    socket.send("goodbye\r\n");
    socket.close();
  });
});
sys.puts("Server at tcp://" + (HOST || "localhost") + ":" + PORT.toString() + "/");
server.listen(PORT, HOST || "localhost");