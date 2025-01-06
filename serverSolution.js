const http = require('http');
const stream = require('stream');

const server = http.createServer((req, res) => {
  // Set response headers including keep-alive
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'keep-alive',
    'Transfer-Encoding': 'chunked' // Crucial for large responses
  });

  // Use a stream to send the response in chunks
  const largeResponseBody = new stream.Readable({
    read() {
      // Simulate a large response with chunks
      this.push('This is a large response body chunk ');
      //Push null to signal end of stream
      this.push(null);
    }
  });

  largeResponseBody.pipe(res);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});