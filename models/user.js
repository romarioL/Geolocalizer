const mongoose = require("../database/index")

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String, 
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true,
		select: false
	},
	coordinates_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "coordinates_user"
	}
	
})

const User = mongoose.model("user", UserSchema)

module.exports = User

