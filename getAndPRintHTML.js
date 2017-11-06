const https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
https.get(requestOptions, function(response) {
    response.setEncoding('utf8');


  let respond = '';
  // res.on('data', (chunk) => {
  response.on('data', function (chunk) {
    respond += chunk;

});

  // res.on('end', () => {
  response.on('end', function () {
    console.log('response body:');
    console.log(respond);
})
})
};

console.log(getAndPrintHTML());