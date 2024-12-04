const express = require("express"); 
const app = express();
const port = 2;
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));

app.listen(port ,()=>{
    console.log("Server Start");
})

app.get("/user",(req,res)=>{
    res.send("User Page");
})
app.get("/us/:username",(req,res)=>{
    console.log(req.params);
    res.redirect("https://ecommerce-akshat.netlify.app/");
})