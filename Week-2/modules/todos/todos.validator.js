export const validateAddTodo = (req, res, next) => {
  const { title, description } = req.body;
  if (
    !title ||
    !description ||
    typeof title !== "string" ||
    typeof description !== "string"
  ) {
    return res
      .status(400)
      .json({
        error: "Title and description are required and must be strings",
      });
  }
  next();
};
