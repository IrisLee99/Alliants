import mongoose from 'mongoose';
import { ContactSchema, SearchSchema} from '../models/searchModel';

const Search = mongoose.model('Search', SearchSchema);

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
    Search.find({}, (err,search) => {
        if (err) {
            res.send(err);
        }
        res.json(search);

    });
};

export const getSearchWithId = (req, res) => {
    Search.findById(req.params.searchId, (err, search) => {
        if (err) {
            res.send(err);
        }
        res.json(search);
    });
}