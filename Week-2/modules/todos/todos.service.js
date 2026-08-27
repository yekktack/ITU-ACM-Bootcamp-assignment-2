export const todos = [];

export const addTodo = (title, description) => {
  const todo = {
    id: crypto.randomUUID(),
    title,
    description,
    completed: false,
    createdAt: new Date(),
  };
  todos.push(todo);
  return todo;
};

export const getTodos = () => {
  return todos;
};

export const getTodoById = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    return;
  }
  return todo;
};
