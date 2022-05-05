import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import routesWeb from "./routes/web";

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

//----------view engine
configViewEngine(app);

//----------body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//----------web router
routesWeb(app);

//----------running
app.listen(PORT, () => {
    console.log(">>> Server is running in PORT : " + PORT);
})