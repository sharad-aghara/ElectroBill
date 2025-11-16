import { Router } from "express";
import choiceController from "../controllers/choice.controller.js";
import { validate } from "../middleware/validate.js";
import { createChoiceSchema, updateChoiceScheme } from "../validators/choice.validator.js";

const choiceRouter = Router();

choiceRouter.get("/", choiceController.list)
choiceRouter.post("/", validate(createChoiceSchema), choiceController.create)
choiceRouter.put("/:id", validate(updateChoiceScheme), choiceController.update)
choiceRouter.delete("/:id", choiceController.remove)

export default choiceRouter;