import {Injectable, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {TodoModel} from './todo-model';

@Injectable()
export class TodoService{
    todos: Array<TodoModel> = new Array<TodoModel>();
    isEmpty: boolean = false;
    
    constructor(private _router: Router){
        this.todos.push(new TodoModel((this.todos.length + 1).toString(), "Take out trash", "Make sure to gather up from all rooms."));
        this.todos.push(new TodoModel((this.todos.length + 1).toString(), "Mop floors", ""));
        this.todos.push(new TodoModel((this.todos.length + 1).toString(), "Clean gutters", "Need to pick up a new garden hose from the hardware store."));        
    }
    
    getTodos(){
        return this.todos;
    }
    
    getTodo(id: string){
        return this.todos[parseInt(id) - 1];
    }
    
    addTodo(todo: TodoModel){
        
        todo.id = (this.todos.length + 1).toString();
        this.todos = [...this.todos, todo];
        
        this._router.navigate(["Todos"]);
        
        this.checkForMoreTodos();
    }
    
    updateTodo(todo: TodoModel){
        
        const i = this.todos.indexOf(todo);
        
        this.todos = [
            ...this.todos.slice(0, i),
            todo,
            ...this.todos.slice(i + 1)
        ];
        
        this._router.navigate(["Todos"]);
    }
    
    completeTodo(todo: TodoModel){
        
        todo.status = "completed";
        
        const i = this.todos.indexOf(todo);
        
        this.todos = [
            ...this.todos.slice(0, i),
            todo,
            ...this.todos.slice(i + 1)
        ];
        
        this.checkForMoreTodos();
    }
    
    private checkForMoreTodos(){
        var allCompleted = true;
        this.todos.forEach(item =>{
            if(item.status != 'completed'){
                allCompleted = false;
            }
        });
        
        this.isEmpty = allCompleted;
    }
}