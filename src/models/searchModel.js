import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SearchSchema = new Schema(
    {
        searchTerm :{
            type: String,
            required: 'Enter a search term'
        },
        created_date: {
            type: Date,
            default: Date.now
        }
    }
);

