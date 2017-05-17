var through = require('through2');
var fs = require('fs');
var split = require('split');


var through = through(function(buffer, _, next){
  buffer = buffer.toString().toUpperCase();
  this.push(buffer + ' ');
  next();
});


fs.createReadStream('problem.txt')
  .pipe(split())
  .pipe(through)
  .pipe(process.stdout)
;
