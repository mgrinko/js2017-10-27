const express = require('express');
const bodyParser = require('body-parser');
const port = 80;

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');    
});

app.listen(port, () => {
  console.log('Server is listening the port: ' + port);
});