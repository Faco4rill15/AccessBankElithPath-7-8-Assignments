

const express = require("express")

const dotenv = require("dotenv")
dotenv.config()

const app = express()


const port = process.env.PORT || 7500 

app.listen((PORT) => {
    console.log(`server is running on port ${port}`)
});


app.get("/string", (request, response) => {
    response.send("Hi I am Uche Kenneth from Anambra")
})


app.get("/object", (request, response)=>{
    response.json({message: "Hell World"})
})


app.get("/array", (request, response) => {
    response.json(["apple", "banana", "orange"])
})


