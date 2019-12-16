var { cosmiconfig } = require("cosmiconfig");
var explorer = cosmiconfig("bcknd");

//*******************************************

//explorer config
var x;

function SetHttp(serve, port, options = { forceHttps: true }) {
  var url = require("url");
  var HTTP = require("http");
  if (options.forceHttps === true) {
    serve.replace(x.httpForce, "var url = require(\"url\"); if (url.parse(req.url))"); //the httpForce comment should be at the top of the function ex:
    //function Web (req,res){
    //HTTP_FORCE_COMMENT
    //res.end("123456");
    //}
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
