require('dotenv').config()
const ejs = require("ejs");
const express = require("express");
const bodyParser = require('body-parser');
const db = require(__dirname + "/databas.js");


const app = express();



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


app.get("/", async function(req, res){

    res.render("index", {});
})


app.get("/print:type",async function(req, res){
    const type = req.params.type;
    const result = await db.getDataType(type);
    if (result[0] == undefined){
        res.redirect("/")
    } else {
        res.render("print", {data: result});
    }
})



app.get("/:type", async function(req, res){
    const type = req.params.type;
    const result = await db.getDataType(type);
    if (result[0] == undefined){
        res.redirect("/")
    } else {
        res.render("page", {data: result});
    }
    
})





 app.listen(process.env.PORT || 3000, function(){
    console.log("server started on port 3000 or " + process.env.PORT);
})

