const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API! Talib");
  
});

const { getTodos, createTodo, updateTodo, deleteTodo } = require("./controllers/Todo");

router.post("/todos", createTodo);
router.get("/showdata", getTodos );

router.put("/todos/:todoID", updateTodo);

router.delete("/todos/:todoID", deleteTodo);




module.exports = router;


