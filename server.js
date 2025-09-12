const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Proxy route (example: /proxy)
app.use('/proxy', createProxyMiddleware({
  target: 'https://www.google.com',
  changeOrigin: true,
  pathRewrite: { '^/proxy': '' },
  secure: false
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
