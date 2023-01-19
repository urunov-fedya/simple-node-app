const http = require('http');

const port = 9090

http.createServer((res, req) => {
  req.end('hello');
}).listen(port, () => console.log('listening on port ' + port));