import {Todo} from '../models/todo';
import {Common} from '../common/common';

export class TodosDb{
    public todos: Array<Todo> = new Array<Todo>();
    constructor(){
        this.todos.push(new Todo(Common.generateUUID(), "Take out trash", "Make sure to gather up from all rooms."));
        this.todos.push(new Todo(Common.generateUUID(), "Mop floors", ""));
        this.todos.push(new Todo(Common.generateUUID(), "Clean gutters", "Need to pick up a new garden hose from the hardware store."));
    }
}