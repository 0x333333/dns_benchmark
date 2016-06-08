var async = require('async');
var dns = require("dns");

var read = function(callback) {
  dns.resolve4('test.test.com', function(err, addr) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, addr);
    }
  });
};

dns.setServers(['23.99.108.65']);

var arr = [];
for (var i = 0; i < 10000; i ++) {
  arr.push(read);
}

async.parallel(arr, function(err, results){
  console.log('done');
});

