import express from "express";
import ejs from "ejs";
import  bodyParser  from "body-parser";
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let title = [];
let message = [];

app.get("/", (req,res)=>{
    res.render("home", {title: title, message: message})
})

app.post("/", (req, res)=>{
    title.push(req.body["title"])
    message.push(req.body["message"])
    res.redirect("/")
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})