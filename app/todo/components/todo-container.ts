import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {TodoService} from '../services/todo-service';
import {TodoList} from './todo-list';
import {TodoAdd} from './todo-add';

@Component({ 
    selector: 'todo-container', 
    template: '<router-outlet></router-outlet>',
    directives: [RouterOutlet],
    providers: [TodoService]
})
@RouteConfig([
    {path: '/', component: TodoList, name: 'TodoList', useAsDefault: true},
    {path: '/add', component: TodoAdd, name: 'AddTodo'}
])
export class TodosComponent{
    
}