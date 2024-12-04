const express = require("express"); 
const app = express();
const port = 2;
app.listen(port ,()=>{
    console.log("Server Start");
})

app.get("/user",(req,res)=>{
    res.send("User Page");
})
app.get("/us/:username",(req,res)=>{
    console.log(req.params);
    res.render("home.ejs");
})