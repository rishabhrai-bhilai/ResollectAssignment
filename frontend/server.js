import('json-server').then((jsonServer) => {
  const server = jsonServer.create();
  const router = jsonServer.router('db.json');
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  server.use(router);

  server.listen(5000, () => {
    console.log('JSON Server is running on port 5000');
  });
}).catch((error) => {
  console.error('Failed to load json-server:', error);
});