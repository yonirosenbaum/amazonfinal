const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/loginUser", "/signUp"],
    createProxyMiddleware({
      target: "http://localhost:4000",
    })
  );
};
// Can also do
{/*
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/**', { target: 'http://localhost:5000' }));
};
*/}
// Or
{/*
  const proxy = require('http-proxy-middleware') 
module.exports = function(app) {
    app.use(proxy(['/api', '/auth/google'], { target: 'http://localhost:5000' }));
}
 */} 