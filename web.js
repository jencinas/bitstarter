var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var indexbuf = new Buffer(100);
  indexbuf.write(fs.readFileSync('index.html').toString());
  
  response.send(indexbuf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
