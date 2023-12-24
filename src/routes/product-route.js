"use strict";

const express = require("express");
const router = express.Router();

// Rota post
router.post("/", (req, res, next) => {
  res.status(201).send(req.body);
});

// Rota put
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(201).send({
    id: id,
    item: req.body,
  });
});

// Rota delete
router.delete("/", (req, res, next) => {
  res.status(200).send(req.body);
});

module.exports = router;
