const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./src/routes");
const cors = require("cors");
const log = require("./src/helpers/logger");
const app = express();
require("dotenv").config({ path: `./.env.${process.env.NODE_ENV}` });
const sequelize = require("./src/database/connect");
require("./src/database/asociations");

// MIDLEWARE
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Controladores
const { postSMS } = require("./src/controllers/sms");
const { postUser, getUsers } = require("./src/controllers/user");
const { postBussines, getBussines } = require("./src/controllers/bussines");

// routes
//app.use(routes);
/* app.post(`/orq/sms/v1.0/send`, postSMS);
app.post(`/orq/user/v1.0/create`, postUser);
app.get(`/orq/user/v1.0/all`, getUsers);
app.post(`/orq/bussines/v1.0/create`, postBussines);
app.get(`/orq/bussines/v1.0/all`, getBussines); */
// Iniciando Servidor.
app.listen(process.env.NODE_PORT, process.env.NODE_HOST, async () => {
  try {
    await sequelize.sync({ force: false }); //await sequelize.authenticate({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("err ", error);
  }
});
