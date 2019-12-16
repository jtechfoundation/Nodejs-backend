var { cosmiconfig } = require("cosmiconfig");
var explorer = cosmiconfig("bcknd");

//*******************************************
//explorer config
var x;

function SetHttp() {}

function SetConfig() {
  explorer
    .search()
    .then(res => {
      x = res;
    })
    .catch(e => console.error);
}
