import express from "express";

// @types/express
const app = express();

// localhost:4200
app.listen(4200, () => console.log("Server is running on port 4200"));