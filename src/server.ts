import express, { request, response } from "express";
import "reflect-metadata";
import "./database";
import { router } from "./routes";

// @types/express
const app = express();
app.use(express.json());
app.use(router);

// localhost:5300
app.listen(5300, () => console.log("Server is running on port 5300"));

