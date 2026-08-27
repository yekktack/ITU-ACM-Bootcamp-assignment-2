import express from "express";
import todosRouter from "./modules/todos/todos.router.js";
import notFoundHandler from "./utils/notFoundHandler.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";

const server = express();

server.use(express.json());

server.use("/todos", todosRouter);

server.use(notFoundHandler);
server.use(globalErrorHandler);

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
