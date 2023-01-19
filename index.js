const http = require('http');

const port = 9090

http.createServer((_, req) => {
  req.end('hello');
}).listen(port, () => console.log('listening on port ' + port));