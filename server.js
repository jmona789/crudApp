var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));

//Database configuration
var mongojs = require('mongojs');
var databaseUrl = "week18day2";
var collections = ["notes"];
var db = mongojs(databaseUrl, collections);
db.on('error', function(err) {
  console.log('Database Error:', err);
});



// Routes


//Save to DB


//Get from DB


//Find One in DB
//when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))



//Update One in the DB
//when searching by an id, the id needs to be passed in as (mongojs.ObjectId(IDYOUWANTTOFIND))




//Delete One from the DB



//Clear the DB




app.listen(3000, function() {
  console.log('App running on port 3000!');
});