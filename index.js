var { cosmiconfig } = require("cosmiconfig");
var explorer = cosmiconfig("bcknd");

//*******************************************

//explorer config
var x;

function SetHttp(serve, port, options = { async: false, forceHttps: true }) {
  var HTTP = require("http");
  if (options.forceHttps === true) {
    
  }
  if (options.async === true) {
    delete options.async;
    AsyncSetHttp(serve,port,options);
  }
}

//***********************************************

async function AsyncSetHttp(serve, port, options) {
  
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
