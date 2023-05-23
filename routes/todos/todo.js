import  express  from "express";
import Todo from "../../models/Todo.js";

const router = express.Router();


const todoList = new Todo();

 

router.post('',(req,res)=>{
    const {todo} = req.body;

    if(!todo){
        res.status(400).json({message:"Todo not found"})
    }else{
        todoList.addTodo(todo);
        res.status(200).json({todoList});
    }
         
 })

 //get
 router.get('',(req,res)=>{
         res.status(200).json({todoList});
     
 })

 // get by id
router.get("/:id",(req,res)=>{
    const {id} = req.params;
    const todo = todoList.getTodo(id);
// console.log(todo);
    if(todo){
       res.status(200).json({todo});
      
    }else{
        res.status(400).json({message:" get todo not found"})
    }
 })


// put by id
router.put("/:id",(req,res)=>{
    const {id} = req.params ;
    const todo =todoList.getTodo(id); 
    console.log(todo)
    if(!todo){
        res.status(400).json({message:"todo not found"})
    }
        const oldTodo = todoList.getTodo(id);
        console.log(oldTodo)
       if(!oldTodo){
        res.status(400).json({message:"todo not found"})
       }else{
        const updatedTodo = todoList.updateTodo(id,todo);
        console.log(updatedTodo)
       res.json(updatedTodo);
    }

})
router.delete("/:id",(req,res)=>{
    const {id} = req.params ;
    const todo = todoList.getTodo(id);
    if(!todo){
       res.status(400).json({message:"todo not found"})
    }else{
      todoList.deleteTodo(todo);
          res.json({todoList})
    }
})

 export default router;