"use strict";

const express = require("express");
const router = express.Router();
const controller = require('../controllers/product-controller');

// Rota post
router.post("/", controller.post);

// Rota put
router.put("/:id", controller.put);

// Rota delete
router.delete("/", controller.delete);

module.exports = router;
