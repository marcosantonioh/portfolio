const express = require("express")

const app = express()


app.get("/", function(req, res){

    res.send("welcome to my main page")

})


app.get("/ola/:nome", function(req, res){
    
    res.send("Olá " + req.params.nome)
})


app.listen(3000, function(){console.log("servidor rodando!")})