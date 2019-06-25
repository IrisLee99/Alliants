import express from 'express';

const app = express();
const PORT = 3000;

const { createServer} = require("http");
const { createReadStream} = require("fs");

const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {"Content-Type" : type});

    createReadStream(filePath).pipe(res);
};

createServer((req, res)=> {

    switch(req.url) {
        case "/": 
            return sendFile(res, 200, "text/html", "./index.html");
        case "/search_result_page.html?SearchTerm=car":
            return sendFile(res, 200, "text/html", "./search_result_page.html");
        case "/styles.css":
            return sendFile(res, 200, "text/css", "./styles.css");
        default:
            return sendFile(res, 200, "text/html", "./404.html");    
    }

}).listen(PORT);

console.log(`Iris's personal website running on port ${PORT}` );