const express = require("express")

const router = express.Router()

const passport = require("passport")

const passportConfig = require("../middlewares/jwt-passport") 

router.get('/profile', (req, res, next) => {
  //We'll just send back the user details and the token
  res.json({
    message : 'You made it to the secure route',
    user : req.user,
    token : req.query.secret_token
  })
});


module.exports =  app => app.use("/api", passport.authenticate('jwt', {session: false }), router)

