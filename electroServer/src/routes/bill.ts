import { Router } from "express";
import billController from "../controllers/bill.controller.js";
import { validate } from "../middleware/validate.js";
import { CreateBillSchema } from "../validators/bill.validator.js";

const billRouter = Router();

billRouter.get("/", billController.list);
billRouter.get("/:id", billController.get);
billRouter.post("/", validate(CreateBillSchema), billController.create);
billRouter.delete("/:id", billController.remove);

export default billRouter;