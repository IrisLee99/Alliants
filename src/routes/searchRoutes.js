import { addNewSearch } from "../controllers/searchController";

const routes = (app) => {
    app.route('/search')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, (req, res, next) => {
        res.send('GET request successful')
    })
    
    //POST endpoint
    .post(addNewSearch);

    app.route('/search/:searchTerm')
    .put((req, res) =>
    res.send('PUT request successful'))

    .delete((req, res) =>
    res.send("DELETE request successful"));

}

export default routes;