import express from "express";
import {
  getTodosController,
  addTodoController,
  getTodoByIdController,
} from "./todos.controller.js";
import { validateAddTodo } from "./todos.validator.js";

const r = express.Router();

r.get("/", getTodosController);

r.post("/", validateAddTodo, addTodoController);

r.get("/:id", getTodoByIdController);

// TODO (Aşama 1): PUT /:id, PATCH /:id ve DELETE /:id route'larını ekleyin.
// Güncelleme route'larının önüne uygun validator'ları zincirlemeyi unutmayın.

export default r;
