const express = require ("express");
const routes = express.Router();
const controller = require ("../controller/controller");

//rutas
routes.get("/", controller.index1);

routes.get("/index2", controller.index2);

module.exports = routes; 