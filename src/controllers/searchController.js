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
};
