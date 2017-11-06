const https = require('https');
//var args = process.argv[2];
//var args1 = process.argv[3];

function getHTML(host,path,callback) {  // not anon function param

  /*var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'*/
      /*host: args,
      path: args1*/

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

function printHTML (html) {
  console.log(html);}

getHTML('sytantris.github.io','/http-examples/step4.html', printHTML);
// console log automatically adds a new line

