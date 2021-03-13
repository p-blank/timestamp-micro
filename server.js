var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/timestamp/:tim", (req, res) =>{
  var cur = new Date(req.params.tim);
  if (/\d{5,}/.test(req.params.tim)) 
    cur = new Date(parseInt(req.params.tim));
    
  res.json({
    unix: cur.valueOf(),
    utc: cur.toUTCString()
  });
});

// listen for requests :)
var listener = app.listen(8080, function () {
  console.log('App is listening on port ' + listener.address().port);
});
