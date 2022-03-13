const {response, request } = require("express");
var fs = require("fs");
var express = require("express");
const { format } = require("express/lib/response");
var app = express();
var bodyParser = require("body-parser");
const res = require("express/lib/response");
require("dotenv").config();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("./public"));

app.get("/guestbook", function(req,res){
    var data = require(__dirname + '/sample2.json');
    var results = '<table border="1">';

    for (var i = 0; i < data.length; i++) {
       
        results +=
            '<tr>' +
            '<td>' + data[i].Name + '</td>' +
            '<td>' + data[i].Country + '</td>' +
            '<td>' + data[i].Message + '</td>' +
            '<td>' + data[i].Date + '</td>' +
            '</tr>';
    }
    
    res.send(results + "Return back from <a href='/'>here</a>");
});

app.get("/newmessage", function(req,res){
    res.sendFile(__dirname + "/public/newmessage.html");
});

app.post("/newmessage", function(req, res){
    
    var data = require("./sample2.json");
    
    data.push({
        Name: req.body.name,
        Country: req.body.country,
        Message: req.body.message,
        Date: new Date()
        
    });

    var jsonStr = JSON.stringify(data);
    
    fs.writeFile("sample2.json", jsonStr, err => {
        if (err) throw err;
        console.log("Thank you! New message has been saved into guestbook!");
    });
    res.send("Name, country and message has been saved into /guestbook. Navigate back to main page <a href='/'>here</a>");
});

app.get("/ajaxmessage", function(req,res){
    res.sendFile(__dirname + "/public/ajaxmessage.html");
});

app.post("/ajaxmessage" , function(request,response){
    // POST

    
    var name = request.body.name;
    var country = request.body.country;
    var message = request.body.message;
    console.log(name);
    console.log(country);
    console.log(message);
   
    //response.send("Message: " + message + " has been send from " + country + " by " + name);

  
    response.send("Message: '" + message + "' has been send from " + country + " by " + name);
    
}); 


app.get("*", function(req,res){
    res.status(404).send("Sivua ei löydy!");
});

app.listen(8081,function(){
    console.log('Portti 8081');
});