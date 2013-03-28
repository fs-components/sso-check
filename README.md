sso-check
=========

Simple SSO check


Installation
------------

    $ component install fs-components/sso-check

API
---

```js
var sso = require("sso-check");

var options = {
  remote: "http://example.com/path/to/provider.html",
  swf: "http://my-host.com/path/to/easyxdm.swf"
}

sso(options, function(err, loggedIn) {
  console.log(loggedIn ? "User is logged in" : "User is not logged in");
});
```

License
-------

MIT
