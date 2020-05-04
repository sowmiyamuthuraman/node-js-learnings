const express = require('express')

const app = express() // creates a new instance of the web application

app.get('/', (req, res) =>{
    res.send("Hello world");
});

app.get("/user", (req, res) => {
    const id = req.query.id
    res.send("Welcome back "+ id);
});

app.get("/user/:id", (req, res) => {
    const id = req.params.id
    res.send("Hey your user id is " + id);
});

app.listen(8080, () => {
    console.log("Running");
});