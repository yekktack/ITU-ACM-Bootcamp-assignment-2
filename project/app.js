import express from "express";
import todosRouter from "./modules/todos/todos.router.js";
import notFoundHandler from "./utils/notFoundHandler.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";

const server = express();

server.use(express.json());

server.use("/todos", todosRouter);

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.use(notFoundHandler);
server.use(globalErrorHandler);


export default server;
