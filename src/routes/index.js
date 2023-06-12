const userRoutes = require("./user.routes");
const productRoutes = require("./product.routes");
const orderRoutes = require("./order.routes");
const cartRoutes = require("./cart.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

const apiRoutes = (app) => {
  app.use(userRoutes);
  app.use(productRoutes);
  app.use(orderRoutes);
  app.use(cartRoutes);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

module.exports = apiRoutes;