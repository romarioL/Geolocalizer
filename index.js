const  express = require('express')

const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

 require("./controllers/index")(app)

app.listen(port, () => console.log("ouvindo na porta 3000"))