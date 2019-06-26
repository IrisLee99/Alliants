import express from 'express';
import routes from './src/routes/searchRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/AlliantDB', {
    useNewUrlParser: true   
});

//bodypaser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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