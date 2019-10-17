const express = require("express")

const router = express.Router()

const distanceCalculator = require("../models/distancecalculator")

const User = require("../models/user")

const jwt = require("jsonwebtoken")

const passport = require("passport")

const signup = require("../middlewares/signup")

const login = require("../middlewares/login")


const bcrypt = require("bcryptjs")



const generateToken =  ( params = {})  => jwt.sign({params}, process.env.SECRET, {expiresIn: 300})




router.post('/register', passport.authenticate('signup', {session: false}), async (req, res, next ) => {

	
	 res.send({
     message: "Successfully sign up",
     user: req.user
   })

	  	  

	

 
})

router.post("/login", async (req, res, next) => {

  passport.authenticate("login", async (err, user, info) => {

    try {

    if(err || !user) {
       const error = new Error("An error occured")
       return next(error)
    }

    req.login(user, {session: false }, async (error) => {
      if(error) {
        return next(error)
      }

      const body = {_id: user._id, email: user.email }

      const token = jwt.sign({user: body}, process.env.SECRET)

      return res.json({token})


    })

  }catch(err) {
    return next(err)
  }

  })(req, res, next)
})


module.exports = app => app.use("/auth", router)