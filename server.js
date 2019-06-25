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
        case "/search/car/car1":
            return sendFile(res, 200, "image/jpeg", "https://live.staticflickr.com/65535/48127193876_303c27f13a_m.jpg");
        case "/styles.css":
            return sendFile(res, 200, "text/css", "./styles.css");
        default:
            return sendFile(res, 200, "text/html", "./404.html");    
    }

}).listen(3000);

console.log("Iris's personal website running on port 3000");