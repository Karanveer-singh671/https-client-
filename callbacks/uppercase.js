const getHTML = require('../moduleExport');

function printLowerCase (html) {
  html.toUpperCase();
  console.log(html);}


  getHTML('sytantris.github.io','/http-examples/step4.html', printLowerCase);
