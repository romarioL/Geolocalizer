const  passport = require("passport")

const JWTStrategy = require("passport-jwt").Strategy

const ExtractJWT = require("passport-jwt").ExtractJwt

const User = require("../models/user")  

module.exports =  passport.use(new JWTStrategy({
	secretOrKey: process.env.SECRET,
	jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done ) => {
      try {
      	return done(null, token.user)
      } catch(err) {
      	return done(err)
      }
}))





