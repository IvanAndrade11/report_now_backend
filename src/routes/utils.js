import Router from "express";
import controller from "../controllers/utils.js";

const routerUtils = Router();
routerUtils.post("/sendMail", controller.sendMail);

export default routerUtils;
