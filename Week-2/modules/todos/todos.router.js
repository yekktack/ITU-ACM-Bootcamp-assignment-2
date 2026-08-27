import express from "express";
import { getTodos, addTodo } from "./todos.service.js";
import { getTodosController, addTodoController } from "./todos.controller.js";
import { validateAddTodo } from "./todos.validator.js";
import { getTodoByIdController } from "./todos.controller.js";

const r = express.Router();

r.get("/", getTodosController);

r.post("/", validateAddTodo, addTodoController);

r.get("/:id", getTodoByIdController);

export default r;
