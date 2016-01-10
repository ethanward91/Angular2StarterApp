import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {TodoModel} from '../services/todo-model';

@Component({ 
    selector: 'todo-form', 
    templateUrl: 'app/todo/components/todo-form.html'
})
export class TodoForm{
    @Input()todo:TodoModel
    @Output()save = new EventEmitter<TodoModel>();
}