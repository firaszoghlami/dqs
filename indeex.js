var express = require("express");
var bodyParser = require("body-parser");
var sql = require("mssql");
var cors = require('cors');
var app = express(); 

// Body Parser Middleware
app.use(bodyParser.json()); 
app.use(cors());

//Setting up server
 var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });
//Initializing connection string
var dbConfig = {
    user:  "sa",
    password: "Pass@word",
    server: "hostname",
    database: "testt"
};



mysqlConenction.connect((err) =>{
    if(!err)
        console.log('DB conenction succedded.');
    else
        console.log('DB connection failed \n Error : '+ JSON.stringify(err,undefined, 2));
});

app.listen(3000,()=>console.log('Express server is running at port no: 30000'))

app.get('/employees',(res,req)=>{
    mysqlConenction.query('SELECT * FROM aa',(err, rows, fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
});