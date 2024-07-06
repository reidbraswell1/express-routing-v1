// Non ES6
/*
const express = require("express");
const apiRouter = require("./api");
const pageRouter = require("./pages");
*/

import express from "express";
import apiRouter from "./api/index.js";
import pageRouter from "./pages/index.js";

const router = express.Router();

router.use("/api", apiRouter);
router.use(pageRouter);

// Non ES6
/*
module.exports = router;
*/

//ES6
export default router;