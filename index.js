/**
 * Module dependencies
 */
var xdm = require("easyXDM");

module.exports = function(options, cb) {

  if(typeof options === "string") {
    options = {
      remote: options
    };
  };

  var rpc = new xdm.Rpc(options, {
    remote: {
      loggedIn: {
        // Stub the remote call
      }
    }
  });

  rpc.loggedIn(function(response) {
    cb(null, response);
  }, function(err) {
    cb(err);
  });

};
