import { Router } from "express";
import businessController from "../controllers/business.controller.js";

const businessRouter = Router();

businessRouter.get("/", businessController.list);
businessRouter.post("/", businessController.update);
businessRouter.delete("/:id", businessController.remove);

export default businessRouter;