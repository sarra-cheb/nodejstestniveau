const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const passport = require('passport')
const port = 4000;
const app = express();

require('./DataBase/connect')
require('./Passport/bearer')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyparser.json())

app.use(require('express-session')({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./Routes/AuthApi'))
app.use('/api', require('./Routes/ClientApi'))
app.use('/api', require('./Routes/ProduitApi'))
app.use('/api', require('./Routes/CommandeApi'))


app.listen(port, console.log('App running on port ' + port)
)