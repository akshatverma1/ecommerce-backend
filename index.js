const express = require("express"); 
const app = express();
const port = 2;
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({ extended: true }));



let datas= [
    { username: "john123", gmail: "john123@gmail.com", password: "3489201#John" },
    { username: "emma456", gmail: "emma456@yahoo.com", password: "8723456#Emma" },
    { username: "alex789", gmail: "alex789@outlook.com", password: "9274563#Alex" },
    { username: "mike007", gmail: "mike007@hotmail.com", password: "1847562#Mike" },
    { username: "sara999", gmail: "sara999@gmail.com", password: "5639207#Sara" },
    { username: "chris321", gmail: "chris321@yahoo.com", password: "7894562#Chris" },
    {username: "lily876", gmail: "lily876@outlook.com", password: "2458903#Lily" },
    { username: "james654", gmail: "james654@hotmail.com", password: "3982174#James" },
    { username: "olivia111", gmail: "olivia111@gmail.com", password: "6748902#Olivia" },
    { username: "akshat222", gmail: "akshat222@gmail.com",password: "9023456#Akshat" },
];


app.listen(port ,()=>{
    console.log("Server Start");
})

app.get("/create",(req,res)=>{
    res.render("create.ejs");
})
app.get("/show",(req,res)=>{
    res.render("showdta.ejs",{datas});
})
app.post("/new",(req,res)=>{
    console.log(req.body);
    let {username,gmail,password} = req.body;
    datas.push({username,gmail,password});
    res.redirect("http://localhost:2/show")
})