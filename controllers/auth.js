const express = require("express")

const router = express.Router()

const distanceCalculator = require("../models/distancecalculator")

const User = require("../models/user")

const jwt = require("jsonwebtoken")


const generateToken =  ( params = {})  => jwt.sign({params}, process.env.SECRET, {expiresIn: 300})




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

router.post("/login",  async (req, res) => {

	try {
	   const {email} = req.body

       const user = await User.findOne({email}).select("+password")


       

       if(!user ) {


       	    
       	    return  res.status(500).send({error: "User not found"})


       }

        if(user.password == req.body.password)  {

       	    	return res.send({auth: "You are logged  in", token: generateToken({id: user._id})})
       	    }

        

   }catch(e) {

   	 return res.status(400).send({error: " It was not possible to log in"})

   }


})


module.exports = app => app.use("/auth", router)