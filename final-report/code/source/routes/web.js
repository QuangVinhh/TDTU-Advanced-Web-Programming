import express from "express";
import webController from "../controller/webController";

const router = express.Router();
const routesWeb = (app) => {

    //-----path
    router.get("/login", webController.handle_Login);
    router.get("/register", webController.handle_Register);
    router.get("/forgot_password", webController.handle_Forgot_password);

    router.post("/reset_password", webController.handle_Reset_password);
    router.post("/code_password", webController.handle_Code_password);
    router.post("/alert_page", webController.handle_Alert_page);

    return app.use("/", router);
}

export default routesWeb;