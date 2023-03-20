const jwt = require('jsonwebtoken');
const client = require('../Models/Client')
const passport = require('passport');
const LocalStrategy = require('passport-http-bearer').Strategy

passport.use(new LocalStrategy(
  async function (token, done) {
    const decoded = jwt.verify(token, 'secret')

    const response = await client.findById(decoded.clientId)

    if (!response) { return done(null, false); }
    return done(null, response);
  }
));