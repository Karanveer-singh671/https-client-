const getHTML = require('../moduleExport');

function printHTML (html) {
  html.toLowerCase();
  console.log(html);}


  getHTML('sytantris.github.io','/http-examples/step4.html', printHTML);