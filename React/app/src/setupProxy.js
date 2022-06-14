const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/socket',
    createProxyMiddleware({
      target: 'http://localhost:8099',
      changeOrigin: true,
      ws:true
    })
  );
};