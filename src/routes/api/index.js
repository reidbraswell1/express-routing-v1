// Non ES6
/*
const express = require("express");
*/

// ES6
import express from "express";

const router = express.Router();

router.get("/test", (req, res, next) => {
    try {
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});

// Non ES6
/*
module.exports = router;
*/

// ES6
export default router;