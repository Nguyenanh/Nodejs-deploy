var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var session = require('express-session');

// var routes = require('./routes/index');

var app = express();
var server = require('http').createServer(app);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.favicon(__dirname + '/public/images/favicon.ico')); 
app.set('port', process.env.PORT || 9000);
// app.use('/', routes);
app.get('/',function(req, res) {
  res.send("OKE  MEN AAAA");
});
server.listen(app.get('port'), function (req, res) {
  console.log('Server listening at port %d', app.get("port"));
});

module.exports = app;
