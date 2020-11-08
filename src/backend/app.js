const express = require('express');
const path = require('path');
//const logger = require('../middleware/logger.js');
const exphbs = require('express-handlebars');
const members = require('./Members');
const connectDB = require('./config/db');

const app = express();

connectDB();

//init middle ware
//app.use(logger);


//handlebars middleware
//set the endgine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//homepage route
app.get('/', (req, res)=>
 res.render('index',{
   title: 'members app',
   members: members
  })
  );

//set static folder
app.use(express.static(path.join(__dirname, 'public')));
//membes api routes
app.use('/api/members', require('./routes/api/members'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server Started on port ${PORT}`));

