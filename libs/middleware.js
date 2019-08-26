import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

module.exports = app => {
    app.set("port", 3000);
    app.set("json spaces", 4);
    app.use(cors());
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
};