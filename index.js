import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req,res)=>{
    res.render("home")
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})