import { addNewSearch, getSearch, getSearchWithId, youtube } from "../controllers/searchController";

const routes = (app) => {
    app.route('/search')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getSearch)
    
    //POST endpoint
    .post(addNewSearch);

    app.route('/search/:searchId')
    //get specific search 
    .get(getSearchWithId)
    
    
    //put request
    .put((req, res) =>
    res.send('PUT request successful'))

    //delete request
    .delete((req, res) =>
    res.send("DELETE request successful"));

}

export default routes;