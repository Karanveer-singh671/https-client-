const https = require('https');
//var args = process.argv[2];
//var args1 = process.argv[3];

function getAndPrintHTMLmod (host, path) {

  /*var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'*/
      /*host: args,
      path: args1*/

      var options = {
        host: host,
        path: path
      }

https.get(options, function(response) {
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

console.log(getAndPrintHTMLmod('sytantris.github.io','/http-examples/step2.html'));
// console log automatically adds a new line
