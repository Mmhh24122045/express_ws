const express = require("express")

const app = express()

const PORT = 5000;

// middleware == functions (req,res,next)
//ex

const greeting = (req,res,next) => {
console.log("greetings!")
next()
}

// ROUTE
// representation of how the server responds to a request to a certain endpoint
// representation du reponse du serveur aux requettes client sur un certain endpoint(URL) 

// app.use(greeting)
// app.get("/home",(req,res)=>{
//     res.send("<h1>hello all</h1>")
// })

// app.get("/",(req,res)=>{
//     res.send("default page")
// })

// app.use(verifyTime)
app.use(express.static('public'))


app.listen(PORT,err=>err? console.log(err):console.log(`Server is running on port ${PORT}`))