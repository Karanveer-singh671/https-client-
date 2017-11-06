const https = require('https');

module.exports = function getHTML(host,path,callback) {
    var options = {
        host: host,
        path: path
      }

https.get(options, function(response) {  // anon function
    response.setEncoding('utf8');


  let respond = '';
  // res.on('data', (chunk) => {
  response.on('data', function (chunk) {
    respond += chunk;

});



  // res.on('end', () => {
  response.on('end', function () {
    console.log('response body:');
   // console.log(getHTML(host,path, printHTML(respond)));
   callback(respond); // think of callback same as data like any other parameter
// functions difference is that they can be invoked.
})
})
};