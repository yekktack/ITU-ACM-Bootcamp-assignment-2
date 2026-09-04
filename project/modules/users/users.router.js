// Aşama 2 — users modülünün ROUTER katmanı.
//
// Router başka iş yapmaz: yol + metodu doğru zincire bağlar, o kadar.
//
// Bağlamanız gerekenler:
//
//   POST   /          → validateAddUser, addUserController
//   GET    /          → getUsersController
//   GET    /:id/todos → getUserTodosController
//
// Bitirince app.js'e bağlamayı unutmayın:
//
//   server.use("/users", usersRouter);
//
// (todos router'ının hemen altına, notFoundHandler'dan ÖNCE.)
