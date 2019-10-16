const express = require("express")

const router = express.Router()

const geolocalizer = require("../models/geolocalizer")

const haversine = require("../models/haversine")


router.get('/', (req, res ) => {
	 const  ip = req.headers['x-forwarded-for']
	 const geolocation =  geolocalizer("187.19.199.2")
	 res.send(geolocation)
})


module.exports = app => app.use("/", router)