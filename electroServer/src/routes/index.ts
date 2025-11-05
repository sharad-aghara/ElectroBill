import categoryController from "../controllers/category.controller.js";
import { validate } from "../middleware/validate.js";
import { createCategorySchema } from "../validators/category.validator.js";
import router from "./categories.js";

router.post("/", validate(createCategorySchema), categoryController.create);