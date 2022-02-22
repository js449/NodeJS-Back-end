//Express makes the backend easy when we crete server(no loops no if statement in server), it simplify web development and make it really easy.
//Main thing in express is routing and scalability.

//cmds
// npm init
//npm i express --- just a framework

// this tutorial will show us how we can use express for routing and makes things easy for backend &
//instead of writing code like 'creatingCustomBackend.js'file, we will use express now onwords.


const express = require("express"); //importing express module
const app = express(); //creating express app 
const port = 80;

//requests 
app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Jay"); //cmd on postman -- localhost 
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Jay"); //cmd on postman --localhost/about
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Jay");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

//app listening on port 80, check using postman as well as browser once running server (node .\app.js)
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
