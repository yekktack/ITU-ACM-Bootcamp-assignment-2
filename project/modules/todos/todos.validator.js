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


// Typescript kullanmadığımız için bu kontrolleri yapmak çok zor ve zahmetli.
// Ben de araştırdım ettim ve zod diye bir şey buldum.
// Zod kullanarak yeniden yaz
export const validateReplaceTodo = (req, res, next) => {
  if((typeof req.body.title !== "string" )|| (typeof req.body.description !== "string")
      || (typeof req.body.id !== "string")|| (req.body.description.length = 0 ))
}
