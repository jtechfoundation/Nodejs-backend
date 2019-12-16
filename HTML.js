module.exports.fs = require("fs");
module.exports.parseFile = function (file) {
  if (!module.exports.fs.exists(file)){
    console.warn("ERR:\t" + file + " is not a defined file");
    return "<center><b><h1>404</h1><br/>Not Found</b></center>"
  }
}
module.exports.parse = function (s) {
  
}