var https = require('https');

function getAndPrintHTMLChunks(){


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');


  let respond = '';
  // res.on('data', (chunk) => {
  response.on('data', function (chunk) {
    respond += chunk;
    console.log(respond + '\n')
});

  // res.on('end', () => {
  response.on('end', function () {
    console.log('response body:');
    console.log(response);
});

})};

 console.log(getAndPrintHTMLChunks());
