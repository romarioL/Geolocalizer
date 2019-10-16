const express = require("express")

const router = express.Router()

const distanceCalculator = require("../models/distancecalculator")

const User = require("../models/user")




router.post('/register', async (req, res ) => {

	
	  try {


	  	   const {email}  = req.body

	  	  

	        if (await User.findOne({email})) {
	  	         return res.status(400).send({error: "There is already an user with  this email"})
	        }


	       const user = await User.create(req.body)

	       user.password = undefined

	       return res.send({user})	


	      }catch(e) {


	      	 return  res.send({error: " It was not possible to register user"})

	      	 
	      }

	

 
})


module.exports = app => app.use("/auth", router)