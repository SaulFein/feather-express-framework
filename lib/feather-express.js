var http = require('http');
var Router = require(__dirname + '/router');
var fs = require('fs');

var featherObj = module.exports = exports = {};

var router = new Router();

featherObj.get = (route, cb) => {
  router.get(route, cb);
};

featherObj.post = (route, cb) => {
  router.post(route, cb);
};

featherObj.patch = (route, cb) => {
  router.patch(route, cb);
};

featherObj.delete = (route, cb) => {
  router.delete(route, cb);
};

featherObj.listen = (port, cb) => {
  cb = cb || function() {};
  featherObj.server = http.createServer(router.route());
  featherObj.server.listen(port, cb);
};
