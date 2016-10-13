var express = require('express');
var server = express();
var path = require('path');

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', function(req, res){
  res.sendFile(__dirname + '/public/testnet.html');
});

server.listen(3000, function () {
  console.log('Basic testnet app on port 3000!');
});
