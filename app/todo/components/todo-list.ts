import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {TodoService} from '../services/todo-service';
import {TodoModel} from '../services/todo-model';
import {COMMON_APP_PIPES, COMMON_APP_DIRECTIVES} from '../../common/common'; 

@Component({ 
    selector: 'todo-list', 
    templateUrl: 'app/todo/components/todo-list.html',
    styleUrls: ['app/todo/components/todo-list.css'],
    directives: [COMMON_APP_DIRECTIVES, RouterLink],
    pipes: [COMMON_APP_PIPES]
})
export class TodoList{
    searchText: string = "";
    todos: Array<TodoModel>;
    
    constructor(public todoService: TodoService){
        
    }

    ngOnInit()
    {
        this.todos = new Array<TodoModel>();

        this.todoService.getTodos()
            .subscribe(todos => this.todos = todos);
    }
}