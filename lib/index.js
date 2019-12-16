var fs = require("fs");
var { cosmiconfig } = require("cosmiconfig");
//*********************************

const c = {
  exist:fs.exists,
  config:cosmiconfig("bcknd")
}