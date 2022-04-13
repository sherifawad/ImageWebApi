import express, { Express } from "express";
import routes from "./routes";
import imagesRouter from "./routes/images";

/** Server */
const PORT: number | string = process.env.PORT ?? 7010;

// initialize express
const app: Express = express();
// images route
app.use("/api", routes);
//server listen
app.listen(PORT, () => console.log("Server started on port " + PORT));

export default app;
