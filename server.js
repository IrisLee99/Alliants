import express from 'express';
import routes from './src/routes/searchRoutes';

const app = express();
const PORT = 3000;

routes(app);

//const { createServer} = require("http");
//const { createReadStream} = require("fs");

/*const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {"Content-Type" : type});

    createReadStream(filePath).pipe(res);
};*/

app.get('/', (req, res)=> 

    res.send(`Iris's personal website running on port ${PORT}` )
    /*switch(req.url) {
        case "/": 
            return sendFile(res, 200, "text/html", "./index.html");
        case "/search_result_page.html?SearchTerm=car":
            return sendFile(res, 200, "text/html", "./search_result_page.html");
        case "/styles.css":
            return sendFile(res, 200, "text/css", "./styles.css");
        default:
            return sendFile(res, 200, "text/html", "./404.html");    
    }*/

).listen(PORT);

console.log(`Iris's personal website running on port ${PORT}` );