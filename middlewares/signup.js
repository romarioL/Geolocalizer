const passport = require("passport")

const localStrategy   = require('passport-local').Strategy

const User = require("../models/user")

 passport.use("signup", new localStrategy({
	usernameField: 'email',
	passwordField: 'password',
}, async (email, password, done) => {

	try {

		if( await User.findOne({email})) {
			return done(null, {message: "Duplicate email"})
		}
		const user =  await User.create({email, password})
		return done(null, user)
	} catch(err) {
		done(err)
	}

}))