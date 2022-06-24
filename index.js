const express = require("express")

//create a server
const server = express();

//create a port
const PORT = 4000
const hostname = "localhost"

//Routes
server.get("/", function(request, response){
    response.send("You are on home page");

})

//About us
server.get("/about-us", function(request, response){
    response.send("You are on About us Page")

})


//server is listening
server.listen(PORT, hostname, () => console.log(`Server is listening ... on http://${hostname}:${PORT}`))