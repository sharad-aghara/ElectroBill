import { Router } from "express";
import { validate } from "../middleware/validate.js";
import extrasController from "../controllers/extras.controller.js";
import {
    createExtrasSchema,
    updateExtrasSchema,
} from "../validators/extras.validator.js";

const extrasRouter = Router();

extrasRouter.get("/", extrasController.list);
extrasRouter.post("/", validate(createExtrasSchema), extrasController.create);
extrasRouter.put("/:id", validate(updateExtrasSchema), extrasController.update);
extrasRouter.delete("/:id", extrasController.remove);

export default extrasRouter;
