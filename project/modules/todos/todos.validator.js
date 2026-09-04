export const validateAddTodo = (req, res, next) => {
  const { title, description } = req.body;
  if (
    !title ||
    !description ||
    typeof title !== "string" ||
    typeof description !== "string"
  ) {
    return res.status(400).json({
      error: "Title and description are required and must be strings",
    });
  }
  next();
};

// TODO (Aşama 1): validateReplaceTodo ve validateUpdateTodo middleware'lerini
// ekleyin.
//
//   validateReplaceTodo (PUT)  → title, description ve completed'ın üçü de
//                                zorunlu ve doğru tipte olmalı.
//   validateUpdateTodo (PATCH) → en az bir geçerli alan gönderilmiş olmalı;
//                                gönderilen alanların tipi doğru olmalı.
//
// Hatırlatma: hata durumunda next() ÇAĞIRMAYIN — zinciri 400 ile kesin.
// Ve res.status(400).json(...) satırının başına return koymayı unutmayın.
