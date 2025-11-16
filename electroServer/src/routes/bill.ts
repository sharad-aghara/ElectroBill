import { Router } from "express";
import billController from "../controllers/bill.controller.js";
import { validate } from "../middleware/validate.js";
import { listBillSchema } from "../validators/bill.validator.js";

const billRouter = Router();

billRouter.post("/getBills", validate(listBillSchema), billController.list)
billRouter.post("/", billController.create)

export default billRouter;