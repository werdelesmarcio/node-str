"use strict";

//------------------------------------------
// Exportação dos módulos do app
//------------------------------------------
const express = require("express");
const bodyParser = require("body-parser"); // Para envio do corpo da requisição create

const app = express();
const router = express.Router();

// Carregar as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");

// Converte os dados do copo da requisição para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
