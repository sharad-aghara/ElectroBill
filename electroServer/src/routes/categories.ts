import { Router } from "express";
import categoryController from "../controllers/category.controller.js";
import { validate } from "../middleware/validate.js";
import {
    createCategorySchema,
    deleteCategorySchema,
    updateCategorySchema,
} from "../validators/category.validator.js";

const categoryRouter = Router();

categoryRouter.get("/", categoryController.list);
categoryRouter.post(
    "/",
    validate(createCategorySchema),
    categoryController.create
);
categoryRouter.put(
    "/:id",
    validate(updateCategorySchema),
    categoryController.update
);
categoryRouter.delete(
    "/:id",
    categoryController.remove
);

export default categoryRouter;
