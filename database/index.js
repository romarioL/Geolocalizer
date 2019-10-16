const mongoose = require("mongoose")

 mongoose.connect("mongodb://localhost/geolocalizer", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

 mongoose.Promise = global.Promise

 module.exports = mongoose