const express = require("express")

const router = express.Router()

const distanceCalculator = require("../models/distancecalculator")




router.get('/', (req, res ) => {

	 const distance = distanceCalculator("207.97.227.239", "187.19.199.2")

	  res.send({distance: distance})
 
})


module.exports = app => app.use("/", router)