export const validateAddTodo = (req, res, next) => {
  const { title, description } = req.body;


  if (!title || !description || typeof title !== "string" || typeof description !== "string") {
    return res.status(400).json({
      "error": "Title and description are required and must be strings",
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


export const validateReplaceTodo = (req, res, next) => {
// Bu metodu typescriptsiz yazmak işkenceymiş.

  const {id} = req.params;
  const {title, description, completed} = req.body;

  if(typeof title !== "string" || typeof description !== "string" || typeof id !== "string") {
    return res.status(400).json({
      "error": "Title, description and ID are required and must be strings", });
  }
  if(title.length < 1 || description.length < 1) {
    return res.status(400).json({
      "error": "Title and description must be a single character or longer!"})
  }

  if (typeof completed !== "boolean") return res.status(400).json({"error": "Completed must be a boolean!"})

  next();
}

export const validateUpdateTodo = (req, res, next) => {

  const {id} = req.params;
  const {title, description, completed} = req.body;

  if(!id || typeof id !== "string") return res.status(400).json({"error": "Id is required and must be a string!"})

// title tanımlı ama yanlış tipte ise 400 dön
  if(typeof title !== "string" && title !== undefined) return res.status(400).json({"error": "If exists, title must be a string!"})
// description tanımlı ama yanlış tipte ise 400 dön
  if(typeof description !== "string" && description !== undefined) return res.status(400).json({"error": "If exists, description must be a string!"})
// completed tanımlı ama yanlış tipte ise 400 dön
  if (typeof completed !== "boolean" && completed !== undefined) return res.status(400).json({"error": "Completed must be a boolean!"})
  // en az bir tane field'ın olması gerekir.
  if(title === undefined && description === undefined && completed === undefined) return res.status.json({"error": "At least one field must be updated!"})

  next();
}

export const validateDeleteTodo = (req, res, next) => {
  const  {id} = req.params;
  if(!id || typeof id !== "string") return res.status(400).json({"error": "Id is required and must be a string!"})
  next();
}
// Bu kod DRY ilkesini ihlal ediyor ama düzeltme zahmetine girmeyeceğim.