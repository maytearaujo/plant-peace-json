const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/plants.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  // Permitir todos os métodos
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

server.use(router);

module.exports = server;
