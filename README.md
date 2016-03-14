## Synopsis

feather-express is a light framework that makes it easier to create and use REST APIs.

## Installation:
  ```
  npm install feather-express
  ```

## How To Use
require feather-express module:

  ```
  var featherExpress = require(‘feather-express’);
  ```

setup server:

  ```
  featherExpress.listen(3000, () => {
	    console.log(‘Server running on port 3000’);
	});
  ```
You can now create REST calls like in the code example below.

## Code Example:
  ```
  var featherExpress = require(‘feather-express’);

  featherExpress.get('/test', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({'msg': 'GET testing'}));
    return res.end();
  });

  featherExpress.post('/test', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({'msg': 'POST testing'}));
    return res.end();
  });

  featherExpress.listen(3000, () => {
    console.log('Server running port on 3000');
  });
  ```
