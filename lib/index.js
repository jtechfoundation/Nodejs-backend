var fs = require("fs");

//*********************************

var deprecated = {};

//*********************************

module.exports = {
  OBJ() {
    Object.prototype.Set = function(object, ref, val) {
      object[ref] = val;
      return 0;
    };
  }
};
