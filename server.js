// create server to host my portfolio
const express = require('express');
const http =require('http');

// deploying to heroku
const port = process.env.PORT || 3000;

// express app
const app = express();
let server = http.createServer(app);

// create middleware for static site
app.use(express.static('./src'));

// bind app to port
app.listen(port,()=>{
	console.log(`Connected to port ${port}`);
});