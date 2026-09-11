const http = require('http');
const { products, faqs, features } = require('./data.js');

const PORT = 5001;

const setCORSHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
};

const server = http.createServer((req, res) => {
  setCORSHeaders(res);

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'GET') {
    if (req.url === '/api/products') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(products));
      return;
    }

    if (req.url === '/api/faqs') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(faqs));
      return;
    }

    if (req.url === '/api/features') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(features));
      return;
    }

    if (req.url === '/api/orders') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(require('./data.js').orders));
      return;
    }

    if (req.url === '/api/users') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(require('./data.js').users));
      return;
    }
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
