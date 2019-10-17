const  express = require('express')

const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express()

const jwt = require("jsonwebtoken")

require("dotenv-safe").config()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

 require("./controllers/index")(app)

app.listen(port, () => console.log("ouvindo na porta 3000"))