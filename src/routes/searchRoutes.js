import { addNewSearch, getSearch, getSearchWithId } from "../controllers/searchController";

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

    /*app.route('/video')
    .get('/video', function(req, res) {
        const path = './public/IMG_9603.mp4'
        const stat = fs.statSync(path)
        const fileSize = stat.size
        const range = req.headers.range
        if (range) {
          const parts = range.replace(/bytes=/, "").split("-")
          const start = parseInt(parts[0], 10)
          const end = parts[1] 
            ? parseInt(parts[1], 10)
            : fileSize-1
          const chunksize = (end-start)+1
          const file = fs.createReadStream(path, {start, end})
          const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
          }
          res.writeHead(206, head);
          file.pipe(res);
        } else {
          const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
          }
          res.writeHead(200, head)
          fs.createReadStream(path).pipe(res)
        }
      });*/

}

export default routes;