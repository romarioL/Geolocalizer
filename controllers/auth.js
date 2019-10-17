const express = require("express")

const router = express.Router()

const distanceCalculator = require("../models/distancecalculator")

const User = require("../models/user")

const jwt = require("jsonwebtoken")


const bcrypt = require("bcryptjs")



const generateToken =  ( params = {})  => jwt.sign({params}, process.env.SECRET, {expiresIn: 300})




router.post('/register', async (req, res ) => {

	
	  try {


	  	   const {name, email, password}  = req.body

	  	  

	        if (await User.findOne({email})) {
	  	         return res.status(400).send({error: "There is already an user with  this email"})
	        }


	       

	     
  	 	 		await bcrypt.hash(password,  10, (err, hash) => {
  	 	             user.name = name
  	 	             user.email = email
  	 	             user.password = hash 
  	 	             user.save()
  	 			 })

  	 	 	const user = await User.create(req.body)
  	 		



	       user.password = undefined

	       return res.send({user})	


	      }catch(e) {


	      	 return  res.send({error: " It was not possible to register user"})

	      	

	      	 
	      }

	

 
})

router.post("/login",  async (req, res) => {

	try {
	   const {email, password} = req.body

	   

       const user = await User.findOne({email}).select("+password")

      

       

       if(!user ) {


       	    
       	    return  res.status(500).send({error: "User not found"})


       }

         await bcrypt.compare(password, user.password, (err, response) => {
         	if(err) {
         	  return res.status(400).send({error: "Error at hashing"})

         	}

         	if(response) {
         		return res.send({auth: "You are logged  in", token: generateToken({id: user._id})})
         	}else {

         		return res.status(400).send({error: "Invalid password"})
         	}

         })
        

        

   }catch(e) {

   	 return res.status(400).send({error: " It was not possible to log in"})

   }


})


module.exports = app => app.use("/auth", router)