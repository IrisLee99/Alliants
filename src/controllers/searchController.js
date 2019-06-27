import mongoose from 'mongoose';
import { ContactSchema, SearchSchema} from '../models/searchModel';

const Search = mongoose.model('Search', SearchSchema);

const YouTube = require('simple-youtube-api');
export const youtube = new YouTube('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

youtube.searchVideos('Centuries', 4)
    .then(results => {
        console.log(`The video's title is ${results[0].title}`);
        console.log(`The video's id is ${results[0].id}`);
        console.log(`The video's url is ${results[0].url}`);
    })
    .catch(console.log);

export const addNewSearch = (req, res) => {
    let newSearch = new Search(req.body);

    newSearch.save((err, search) => {
        if (err) {
            res.send(err);
        }
        res.json(search);
    });
}

export const getSearch = (req, res) => {
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
