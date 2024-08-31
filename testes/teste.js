const express = require("express")

const app = express()

app.use(express.static('public'))

// app.get("/", function(req, res){

//     res.sendFile(__dirname + "/html/teste.html")

// });

app.listen(4000, function(){console.log("servidor rodando!")})