module.exports = function (app) {
  const webRoute = require("./routing/webRouting");
  app.use(webRoute);

  const dataRoute = require("./routing/dataRouting");
  app.use(dataRoute);
};
