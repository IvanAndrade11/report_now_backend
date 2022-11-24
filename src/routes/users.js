import Router from "express";
import controller from "../controllers/users.js";

const routerUsers = Router();
routerUsers.get("/", controller.list);
routerUsers.get("/:id", controller.get);
routerUsers.post("/create", controller.create);
routerUsers.put("/:id", controller.update);
routerUsers.delete("/:id", controller.delete);
routerUsers.post("/changePassword", controller.changePassword);
routerUsers.post("/validate", controller.validatePassword);

export default routerUsers;
