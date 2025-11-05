import { Router } from "express";
import categoryController from "../controllers/category.controller.js";

const router = Router();

router.get("/", categoryController.list);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.remove);

export default router;