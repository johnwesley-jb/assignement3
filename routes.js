const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const studentController = require("./controller/student.controller.js");

// router.get("/", async (req, res, next) => {});

router.get("/students", studentController.getAll);

router.get("/students/:id", studentController.getById);

module.exports = router;
