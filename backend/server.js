var express = require("express");
var app = express();
var port = process.env.PORT || 9000;

var morgan = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
var expressJwt = require("express-jwt");
var unless = require("express-unless");

var config = require("./config");
var authRoutes = require('./routes/authRoutes');
mongoose.connect(config.database); //
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

app.use('/phonetica/auth', authRoutes);



app.listen(port, function () {
  console.log("Operating on port " + port);
})