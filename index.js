var { cosmiconfig } = require("cosmiconfig");
var explorer = cosmiconfig("bcknd");
var c = require("./lib/index.js");
//*******************************************

//explorer config
var x;

function SetHttp(
  serve = function(req, res) {
    this.root = __dirname;//root
    this.Parser = require("./HTML.js");//default parser
    res.end(this.Parser.parseFile(c.URI(req.url).pathname));//parses File
  },
  port = 3000,
  options = { Uses: null, ServerType: "File" }
) {
  var url = c.URI;
  var HTTP = require("http");
  if (options.Uses === null && options.ServerType === "File") {
    console.warn("Using HTML/TEXT server, parsing...");
  }
}

//**************************************************

function SetConfig() {
  explorer
    .search()
    .then(res => {
      x = res;
    })
    .catch(e => console.error);
}
