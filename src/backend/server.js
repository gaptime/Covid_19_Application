const express = require("express"); //Initialize our app, sits on top of Node to make the routing, request handling, and responding easier to write
const mongoose = require("mongoose"); //used to interact with MongoDB
const bodyParser = require("body-parser");//used to parse incoming request bodies in a middleware
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false //The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). 
  })
);
app.use(bodyParser.json()); // parse application/json

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port}!`));