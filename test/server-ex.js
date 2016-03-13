var frameWork = require(__dirname + '/../index');

frameWork.get('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({'msg': 'GET testing'}));
  return res.end();
});

frameWork.post('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({'msg': 'POST testing'}));
  return res.end();
});

frameWork.patch('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({'msg': 'PATCH testing'}));
  return res.end();
});

frameWork.delete('/test', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify({'msg': 'DELETE testing'}));
  return res.end();
});

frameWork.listen(3000, () => {
  console.log('Server running port on 3000');
});

module.exports = frameWork.server;
