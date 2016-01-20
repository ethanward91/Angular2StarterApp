import {Todo} from '../models/todo';
import {TodosDb} from './todosDb';
import {Common} from '../common/common';

export class TodosContext{
    private static _db = new TodosDb();
    constructor(){
    }
    
    find(): Array<Todo>{
        return TodosContext._db.todos;
    }
    
    findById(id: string): Todo{
        var contact: Todo;
        
        TodosContext._db.todos.forEach(i => {
            if(i.id == id){
                contact = i;
            }
        });
        
        return contact || new Todo();
    }
    
    save(todo: Todo): Todo{
        const i = TodosContext._db.todos.indexOf(this.findById(todo.id));
        
        TodosContext._db.todos = [
            ...TodosContext._db.todos.slice(0, i),
            todo,
            ...TodosContext._db.todos.slice(i + 1)
        ];
        
        return this.findById(todo.id);
    }
    
    insert(todo: Todo): Todo{
        todo.id = Common.generateUUID();
        
        TodosContext._db.todos = [...TodosContext._db.todos, todo];
        
        return this.findById(todo.id);
    }
}