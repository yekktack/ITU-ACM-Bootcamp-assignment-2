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
  if (!todo) return;

  return todo;
};

// TODO (Aşama 1): replaceTodo, updateTodo ve deleteTodo fonksiyonlarını ekleyin.
//
// Hatırlatma: service katmanı req/res görmez. Parametre alır, iş yapar,
// sonuç döndürür. Bulunamayan kayıt için status kodu seçmek controller'ın işi;
// service sadece "bulamadım" bilgisini döndürsün (ör. undefined).


// Bu metodu yazmak iki saatimi aldı çünkü kulağı şöyle değil böyle tutmuşum. Düzeltilmiş halini yazdım sadece.
export const updateTodo = (id, fields) => {

  const todo = todos.find(todo => todo.id === id)
  if(!todo) return;

  if (fields.completed !== undefined) todo.completed = fields.completed;
  if (fields.title) todo.title = fields.title;
  if (fields.description) todo.description = fields.description;

  return todo;
}

export const deleteTodo = (id) => {
  const i = todos.findIndex(todo => todo.id === id)
  if (i < 0) return;
  todos.splice(i,1)
}

export const replaceTodo = (id, title, description) => {
  const todo = todos.find(todo => todo.id === id)
  if (!todo) return;
  todo.title = title;
  todo.description = description;
  todo.completed = false;
  return todo;
}