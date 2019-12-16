var fs = require("fs");

//*********************************

const c = {
  exist: fs.exists,
  URI: x => require("url").parse(x)
};
