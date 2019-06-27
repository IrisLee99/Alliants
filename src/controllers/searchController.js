import mongoose from 'mongoose';
import { ContactSchema, SearchSchema} from '../models/searchModel';

const Search = mongoose.model('Search', SearchSchema);

const videofilename = './public/IMG_960.mp4';
const imagefilename = './public/peppa.jpg';
const fs = require('fs');
const tmpl = fs.readFileSync(require.resolve('../../search_result_page.html'), 'utf8');


const { createReadStream} = require("fs");
const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {"Content-Type" : type});

    createReadStream(filePath).pipe(res);
};

const YouTube = require('simple-youtube-api');
export const youtube = new YouTube('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

export const addNewSearch = (req, res) => {
    let newSearch = new Search(req.body);

    newSearch.save((err, search) => {
        if (err) {
            res.send(err);
        }
        res.json(search);
    });
}

export let videoTitle = "";
export let videoId = ""; 

youtube.searchVideos('Centuries', 4)
.then(results => {
    console.log(`The video's title is ${results[0].title}`);
    videoTitle = results[0].title;
    console.log(`The video's id is ${results[0].id}`);
    videoId = results[0].id;
    console.log(`The video's url is ${results[0].url}`);
    
})
.catch(console.log);

export const getVideo = (req, res) => {
    //const html = tmpl.replace('{{videoURL}}', `https://www.youtube.com/embed/'${videoId}`);
    //let videoURL = "https://www.youtube.com/embed/" + videoId;
    //console.log("line 49 searchController");
    //return sendFile(res, 200, "text/html", html);
    /*Search.find({}, (err,search) => {
        if (err) {
            res.send(err);
        }
        res.json(search);

    });*/
};

export const getSearchWithId = (req, res) => {
    Search.findById(req.params.searchId, (err, search) => {
        if (err) {
            res.send(err);
        }
        res.json(search);
    });
}

export const findStaticImage = (req, res) => {
    console.log(`Static image path ${imagefilename}` );
    return sendFile(res, 200, "image/jpg", imagefilename);
}