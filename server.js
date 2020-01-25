// create server to host my portfolio
const express = require('express');
const http =require('http');

// express app
const app = express();
let server = http.createServer(app);

// create middleware for static site
app.use(express.static('./src'));

// bind app to port
app.listen(3000,()=>{
	console.log("Connected to port 3000!");
});