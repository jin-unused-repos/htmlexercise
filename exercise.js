const express = require("express");
const app = express();
const path = require("path");
const port = 8000;

app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`Server started on port ${ port }`);
});

app.use(express.static("views", { "extensions": ["htm", "html"]}));

app.get("/", (req,res)=>{
    res.sendFile("index");
});

app.get("/contact", (req,res)=>{
    res.sendFile("contact");
});

app.get("/about", (req,res)=>{
    res.sendFile("about");
});

// this is to call 404 page with a static path
/*app.get("/404", (req,res)=>{
    res.sendFile("404");
});*/

// this is to call 404 page when having a wrong route
// app.use((req, res, next)=>{
// 	res.status(404).sendFile(path.join(__dirname, '../views', "404.html"));
// });

app.use((req, res, next)=>{
	res.status(404).sendFile("404.html");
});
