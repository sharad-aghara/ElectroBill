import app from "./app.js";

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`Server is listning on http://localhost:${PORT}`);
});

process.on("SIGINT", async () => {
    console.log("SIGINT received. Shutting down.");
    server.close(() => process.exit(0));
});
