/**
 * Module dependencies
 */
var xdm = require("easyXDM");

module.exports = function(domain, cb) {

  var rpc = new xdm.Rpc({
    remote: domain
  },
  {
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
