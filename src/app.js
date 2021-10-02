const express = require('express');
const hbs = require('hbs');


const app = express();
const path = require("path");
const port = process.env.PORT || 80;

// setting the path

const staticPath = path.join(__dirname,"../public");
const templatesPath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");


// middelware

app.use(express.static(staticPath))
app.set("view engine","hbs")
app.set("views", templatesPath);
hbs.registerPartials(partialPath);



// routing 

app.get("/",(req,res)=>{

    res.render("index");
})



// server create

app.listen(port,()=>{
    console.log("server is runing now on ${port}")
}) 