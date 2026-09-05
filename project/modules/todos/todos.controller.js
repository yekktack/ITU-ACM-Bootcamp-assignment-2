import { getTodos, addTodo, getTodoById, updateTodo, replaceTodo, deleteTodo } from "./todos.service.js";

export const getTodosController = (req, res) => {
  const todos = getTodos();
  return res.status(200).json(todos);
};

export const addTodoController = (req, res) => {
  const { title, description } = req.body;
  const todo = addTodo(title, description);
  return res.status(201).json(todo);
};

export const getTodoByIdController = (req, res) => {
  const { id } = req.params;
  const todo = getTodoById(id);
  if (!todo) {
    return res.status(404).json({ "error": "Todo not found" });
  }
  return res.status(200).json(todo);
};

// TODO (Aşama 1): replaceTodoController, updateTodoController ve
// deleteTodoController fonksiyonlarını ekleyin.
//
// Hatırlatma: controller HTTP'yi bilir — req'ten okur, status kodunu seçer,
// yanıtı yazar. İş kuralları service katmanında kalmalı.

export const replaceTodoController = (req, res) => {

  const {id} = req.params;
  const {title, description} = req.body;

  const todo = replaceTodo(id, title, description);

  if(!todo) return res.status(404).json({"error" : "Todo not found"});

  return res.status(200).json(todo);

}

export const updateTodoController = (req, res) => {
  const {id} = req.params;

  const todo = updateTodo(id, req.body);

  if(!todo) return res.status(404).json({"error": "Todo not found"})

  return res.status(200).json(todo);
}

export const deleteTodoController = (req, res) => {
  const { id } = req.params;

  const success = deleteTodo(id);

  if(!success){
    return res.status(404).json({"error": "Todo Not Found"});
  }

  return res.status(204).send();
}