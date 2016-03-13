var Router = module.exports = exports = function() {
  this.routes = {
    'GET': {},
    'POST': {},
    'DELETE': {},
    'notFound': function(req, res) {
      res.writeHead(404, {'Content-Type': 'application/json'});
      res.write(JSON.stringify({msg: 'Page not found'}));
      return res.end();
    }
  };
};

Router.prototype.get = function(route, cb) {
  this.routes['GET'][route] = cb;
};

Router.prototype.post = function(route, cb) {
  this.routes['POST'][route] = cb;
};

Router.prototype.delete = function(route, cb) {
  this.routes['DELETE'][route] = cb;
};

Router.prototype.route = function() {
  return (req, res) => {
    var routeFunction = this.routes[req.method][req.url] || this.routes.notFound;
    routeFunction(req, res);
  };
};
