import express from 'express';
import routes from './src/routes/searchRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const http = require('http');


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

//trying static files
app.use(express.static('public'));

//const { createServer} = require("http");
const { createReadStream} = require("fs");

const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {"Content-Type" : type});

    createReadStream(filePath).pipe(res);
};

app.get('/', (req, res)=> {

    /*switch(req.url) {
        case "/": 
            console.log("homepage");
            return sendFile(res, 200, "text/html", "./index.html");
        case "/image":
            console.log(`Static image path ${imagefilename}` );
            return sendFile(res, 200, "image/jpg", imagefilename);    
        case "/video":
            //const html = tmpl.replace('{{videoURL}}', `https://www.youtube.com/embed/'${videoId}`);
            console.log("line 52 server.js");
            console.log(`Youtube video path ${res.videoId}` );
            //return sendFile(res, 200, "text/html", "./search_result_page.html");
            //return sendFile(res, 200, "video/mp4", videofilename);    
        case "/search_result_page.html?SearchTerm=car":
            return sendFile(res, 200, "text/html", "./search_result_page.html");
        case "/styles.css":
            return sendFile(res, 200, "text/css", "./styles.css");
        default:
            return sendFile(res, 200, "text/html", "./404.html");    
    }*/
    

}).listen(PORT);

console.log(`Iris's personal website running on port ${PORT}` );