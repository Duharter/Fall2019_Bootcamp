var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if(request.method === 'GET' && parsedUrl.pathname === '/listings'){
    response.end(JSON.stringify(listingData, null, 2));
    console.log(request.url);
  }
  else
  {
    response.statusCode = 404;
    console.log('statusCode:', response && response.statusCode);
    console.log('Bad gateway error');
    response.write('Bad gateway error');
    response.end();
  }
}

fs.readFile('listings.json', 'utf8', function(err, data) {

  if(err) throw err;

  listingData = JSON.parse(data);
    console.log('server listening on: http://localhost:8080');

    server = http.createServer(requestHandler);
    server.listen(port);


});