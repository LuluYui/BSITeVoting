const express = require("express");
const app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");

app.use(express.json());

app.listen(process.env.PORT || '3000', ()=> {
    console.log(`Server is running at ${process.env.PORT || '3000'} `);
    
});