var fs = require("fs");

//*********************************

var deprecated = {};

//*********************************

Object.prototype.Set = function(object, ref, val) {
  object[ref] = val;
  return 0;
};

//*********************************

Object.Set(deprecated, "exist", fs.exists)