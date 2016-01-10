import {Component, OnInit} from 'angular2/core';
import {ViewHeader} from '../../common/common';
import {TodoModel} from '../services/todo-model';
import {TodoService} from '../services/todo-service';
import {TodoForm} from './todo-form';

@Component({ 
    selector: 'todo-add', 
    template: `
                <view-header [title]="'Add Todo'"></view-header>
                <todo-form  [todo]="todo" (save)="todoService.addTodo($event)"></todo-form>
                `,
    directives: [ViewHeader, TodoForm]
})
export class TodoAdd implements OnInit{
    public todo: TodoModel;
    constructor(public todoService: TodoService){
        
    }
    
    ngOnInit(){
        this.todo = new TodoModel();
    }
}