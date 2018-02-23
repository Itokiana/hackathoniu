let express = require('express')
let app = express()

app.set("port", process.env.app_port || 8080)

app.get('/', (request, response) =>{
    response.send("Hello world!")
})

app.listen(app.get("port"))

