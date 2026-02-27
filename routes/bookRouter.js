const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All authors"));
bookRouter.get("/:bookId", (req, res) => {
  const { bookID } = req.params;
  res.send(`Book ID: ${bookID}`);
});
bookRouter.get("/:bookId/reserve", (req, res) => {
  const { bookID } = req.params;
  res.send(`Book ID Reserve: ${bookID}`);
});
bookRouter.post("/:bookId/reserve", (req, res) => {
  const { bookID } = req.params;
  res.send(`Book ID Reserve Post: ${bookID}`);
});

module.exports = bookRouter;
