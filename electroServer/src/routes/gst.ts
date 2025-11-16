import { Router } from "express";
import { validate } from "../middleware/validate.js";
import gstController from "../controllers/gst.controller.js";
import { createGSTSchema, updateGSTSchema } from "../validators/gst.validator.js";

const gstRouter = Router();

gstRouter.get("/", gstController.list);
gstRouter.post("/", validate(createGSTSchema), gstController.create);
gstRouter.put("/:id", validate(updateGSTSchema), gstController.update);
gstRouter.delete("/:id", gstController.remove);

export default gstRouter;