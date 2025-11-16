import { Router } from "express";
import colorController from "../controllers/color.controller.js";
import { validate } from "../middleware/validate.js";
import { createColorsSchema, updateColorsSchema } from "../validators/colors.validator.js";

const colorsRouter = Router();

colorsRouter.get("/", colorController.list);
colorsRouter.post("/", validate(createColorsSchema), colorController.create);
colorsRouter.put("/:id", validate(updateColorsSchema), colorController.update);
colorsRouter.delete("/:id", colorController.remove);

export default colorsRouter;
