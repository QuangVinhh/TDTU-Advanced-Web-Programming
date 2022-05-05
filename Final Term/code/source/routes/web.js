import express from "express";
import webController from "../controller/webController";

const router = express.Router();
const routesWeb = (app) => {

    //-----path
    router.get("/", webController.handle_Login);
    router.get("/register", webController.handle_Register);

    return app.use("/", router);
}

export default routesWeb;