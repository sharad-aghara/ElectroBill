import { Router } from "express";
import productController from "../controllers/product.controller.js";
import { validate } from "../middleware/validate.js";
import { createProuctSchema, updateProductSchema } from "../validators/product.validator.js";

const productRouter = Router();

productRouter.get("/", productController.list);
productRouter.post("/", validate(createProuctSchema), productController.create);
productRouter.put("/:id", validate(updateProductSchema), productController.update);
productRouter.delete("/:id", productController.remove);

export default productRouter;