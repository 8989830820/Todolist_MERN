export default class Todo{
    constructor(){
        this.todos = ["Piyush","Sourabh","Singh","Christane","laura"];
    }


addTodo(todo){
    this.todos.push(todo);
}

getTodos(){
return this.todos;
}

getTodo(id){
    return this.todos[id-1];
}

deleteTodo(id){
    this.todos.splice(id-1,1);
    return this.todos;
}

updateTodo(id,todo){
    this.todos[id-1] = todo;
    return this.todos;
}

}