// Node Server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');
var modules = require('./routes/modules');

app.set('port', 5000);

app.use(bodyParser.urlencoded({extended: true}));

app.use('/felines', modules);

app.use('/', index);





app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
