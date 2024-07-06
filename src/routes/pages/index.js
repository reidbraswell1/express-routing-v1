// Non ES6 import
/*
const express = require("express");
const path = require("path");
*/

// ES6
import express from "express";
import path from "path";
import url from "url";

const router = express.Router();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Home Route
router.get("/", (req, res, next) => {
    try {
        res.render('index');
    } catch (err) {
        next(err);
    }
});

// Pokemon Route
router.get("/pokemon", (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname,"../../../public/pokemon.html"));
    } catch (err) {
        next(err);
    }
});

// Newsletter Route

// Non ES6
//module.export = router;
// ES6
export default router;