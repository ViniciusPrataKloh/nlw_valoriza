import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import "reflect-metadata";
import "./database";
import { router } from "./routes";

// @types/express
const app = express();
app.use(express.json());
app.use(router);

// Midlleware de tratativas
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  // Throw new error
  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }

  // Internal error or other error
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })

})


// localhost:5300
app.listen(5300, () => console.log("Server is running on port 5300"));

