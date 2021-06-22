import express, { request, response } from "express";
import "reflect-metadata";
import "./src/database";

// @types/express
const app = express();

// localhost:5300
app.listen(5300, () => console.log("Server is running on port 5300"));

