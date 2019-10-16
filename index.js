const  express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

 require("./controllers/index")(app)

app.listen(3000, () => console.log("ouvindo na porta 3000"))