import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.use((req, res) => res.status(404).json({ error: "Not Found" }));

// central error handler
app.use(errorHandler);

export default app;
