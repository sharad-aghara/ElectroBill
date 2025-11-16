import { Router } from "express";
import categoryRouter from "./categories.js";
import choiceRouter from "./choice.js";
import colorsRouter from "./colors.js";
import extrasRouter from "./extras.js";
import productRouter from "./products.js";
import gstRouter from "./gst.js";
import businessRouter from "./business.js";
import billRouter from "./bill.js";

const router = Router();

// to test the server endpoint
router.get("/health", (req, res) => {
    res.json({ status: "OK", time: new Date().toISOString() });
});

// add sub-routes here
router.use("/categories", categoryRouter);
router.use("/products", productRouter);
router.use("/choice", choiceRouter);
router.use("/extras", extrasRouter);
router.use("/colors", colorsRouter);
router.use("/gst", gstRouter);
router.use("/business", businessRouter);
router.use("/bills", billRouter);

export default router;
