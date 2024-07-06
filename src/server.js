/*
const express = require("express");
const morgan = require("morgam");
const path = require("path");
const router = require("./routes");
*/

// ES6
import express from "express";
import morgan from "morgan"
import path from "path";
import router from "./routes/index.js";

const port = 3000;

const app = express();

app.use(morgan("dev"));

app.use(router);

// Serve static files from the 'piblic' directory
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    try {
        res.render('404', { url: req.originalUrl });
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    try {
        res.render('error', { error: err });
    } catch (err) {
        next(err)
    }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

