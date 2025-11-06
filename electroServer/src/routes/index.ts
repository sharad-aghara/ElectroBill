import { Router } from "express";
import categoryRouter from "./categories.js";

const router = Router();

// to test the server endpoint
router.get("/health", (req, res) => {
    res.json({ status: "OK", time: new Date().toISOString() });
});

// add sub-routes here
router.use("/categories", categoryRouter);

export default router;
