var express         	= require('express');
var bodyParser      	= require('body-parser'); 
var morgan            	= require('morgan');
var cors  			    = require('cors');

var app               	= express();

app.use(cors());

app.use(morgan('dev'));      

app.use(bodyParser.urlencoded({
	extended: true
}));



app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/assets', express.static(__dirname+'/assets'));
app.use('/public', express.static(__dirname+'/public'));


app.get('*', function(req, res) {
      res.sendFile(__dirname + '/public/index.html'); 
 });


app.listen(5000);
console.log('Listen on 5000');