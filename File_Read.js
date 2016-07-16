var fs = require("fs");

fs.readFile("data.txt",function(err,data){

if(err) throw err;
else
console.log(data.toString());

});