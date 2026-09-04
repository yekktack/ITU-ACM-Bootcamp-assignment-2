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

// TODO (Aşama 1): replaceTodo, updateTodo ve deleteTodo fonksiyonlarını ekleyin.
//
// Hatırlatma: service katmanı req/res görmez. Parametre alır, iş yapar,
// sonuç döndürür. Bulunamayan kayıt için status kodu seçmek controller'ın işi;
// service sadece "bulamadım" bilgisini döndürsün (ör. undefined).
