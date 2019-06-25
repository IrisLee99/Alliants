const https = require("https");
const fs = require("fs");

const options = {
  hostname: "www.flickr.com",
  port: 443,
  path: "/search/?text=peppapig",
  method: "GET"
};

const request = https.request(options, res => {
  let download = fs.createWriteStream("./Peppapig.html");
  res.pipe(download);

  res.on("end", () => {
      console.log("Response finished: Flicker page downloaded!");
    });
  }
);

request.end();
