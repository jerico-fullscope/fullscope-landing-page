const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Only proxy API routes, not static assets
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
      onError: (err, req, res) => {
        console.log('Proxy Error:', err.message);
        res.status(500).json({
          error: 'Proxy error - backend server may not be running',
          message: err.message
        });
      }
    })
  );
};
