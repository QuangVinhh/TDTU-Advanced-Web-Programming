import express from "express";

const configViewEngine = (app) => {
    app.use(express.static('./source/public'));
    app.set("view engine", "ejs");
    app.set("views", "./source/views");
}

export default configViewEngine;