import { getTodos, addTodo, getTodoById } from "./todos.service.js";

export const getTodosController = (req, res) => {
  const todos = getTodos();
  res.json(todos);
};

export const addTodoController = (req, res) => {
  const { title, description } = req.body;
  const todo = addTodo(title, description);
  res.status(201).json(todo);
};

export const getTodoByIdController = (req, res) => {
  const { id } = req.params;
  const todo = getTodoById(id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
};
