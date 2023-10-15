const express = require('express');
const PORT = process.env.PORT || 3500;

const app = express();

app.get("/healthcheck", (req,res) =>{
    res.json({
        message: "Hello world"
    });
});