var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');

//set port 
var port = process.env.PORT || 3000;

//configure app to use bodyParser() and this will allow to get data from POST
//parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({extended: true}));

//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api + json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static file location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

//connect to mongoDB database
//uncomment after enter credentials in config/db.js
//mongoose.connect(db.url)

//routes
require('./app/routes')(app)

/*
//ROUTES for API 
var router = express.Router();

//middleware to use for all requests
router.use(function(req,res,next){
  //do logging
  console.log('Something is happening.');
  next();
});

//test route (accessed at GET http://localhost:3000/jpmc-abilityhousing)
router.get('/', function(req,res){
  res.json({ message: 'IT WORKS!! YOU ARE AWESOME!!'});
});
*/

/*
app.get('/', function(req, res){
  res.send('hello');
});

/*
//all routes will prefix with /jpmc-abilityhousing
app.use('/jpmc-abilityhousing', router);
*/

//start app
app.listen(port);
console.log('Magic happens on port ' + port);

//expose app
exports = module.exports = app;
