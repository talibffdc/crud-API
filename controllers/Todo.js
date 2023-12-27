
  const Todo = require("../model/Todo");

  
  const createTodo = async (req, res) => {
    const todo =  new Todo({
      title: req.body.title,
      description: req.body.description,
    });
  
    await todo.save();
    res.send(todo);
}

    const getTodos = async(req, res) => {
 const tododata = await Todo.find()
    res.send(tododata);
}
    


const updateTodo = async (req, res) => {
  const update = await Todo.findOneAndUpdate(
    { _id: req.params.todoID },
    {
      $set: {
        title: req.body.title,
        description: req.body.description,
      
      },

    }, {new:true})

   res.send(update);
  
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.todoID });
    res.json({ message: "Todo Deleted" });
  } catch (err) {
    res.send(err);
  }
};





  module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
  };
  