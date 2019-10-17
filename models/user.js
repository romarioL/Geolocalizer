const mongoose = require("../database/index")


const UserSchema = new mongoose.Schema({
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

UserSchema.methods.isValidPassword =  async (password) => {

    const compare =  await bcrypt.compare(password, user.password)

    return compare

}



const User = mongoose.model("user", UserSchema)

module.exports = User

