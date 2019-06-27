import { addNewSearch, getVideo, getSearchWithId, youtube,videoId,findStaticImage } from "../controllers/searchController";
const fs = require('fs');

const tmpl = fs.readFileSync(require.resolve('../../search_result_page.html'), 'utf8');

const routes = (app) => {
    
    app.route('/video')
    .get(getVideo => {
            //middleware
            //console.log(`Request from: ${req.originalUrl}`);
            //console.log(`Request type: ${req.method}`);
            console.log(`Response video ID: ${videoId}`);
            const html = tmpl.replace('{{videoURL}}', `https://www.youtube.com/embed/'${videoId}`);
            console.log("line 15 searchRoutes");
            //next();
        
    });
    
    //POST endpoint
    app.route('/video')
    .post(addNewSearch);

    //POST endpoint
    app.route('/image')
    .get(findStaticImage);


    app.route('/search/:searchId')
    //get specific search 
    .get(getSearchWithId => {
        console.log("line 32 searchRoutes");
    })
    
    
    //put request
    .put((req, res) =>
    res.send('PUT request successful'))

    //delete request
    .delete((req, res) =>
    res.send("DELETE request successful"));

}

export default routes;