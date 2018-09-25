var express = require("express");
var https = require("https");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

app.get("/get-feed", (req, res, next) => {
	let urlLink = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';
	if (req.query.filter)
		urlLink += '&tags=' + req.query.filter;
	https.get(urlLink, (resp) => {
	  let data = '';

	  // A chunk of data has been recieved.
	  resp.on('data', (chunk) => {
		data += chunk;
	  });

	  // The whole response has been received. Print out the result.
	  resp.on('end', () => {
		data = data.substring('jsonFlickrFeed'.length + 1, data.length -1);
		res.json(JSON.parse(data));
	  });

	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
 
});