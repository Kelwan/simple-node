var through = require('through2');
var fs = require('fs');
var split = require('split');
var path = require("path");


var through = through(function(buffer, _, next){
  buffer = buffer.toString().toUpperCase();
  this.push(buffer + ' ');
  next();
});


fs.createReadStream(path.resolve(__dirname + 'problem.txt'))
  .pipe(split())
  .pipe(through)
  .pipe(process.stdout)
;
