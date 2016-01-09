import {Component} from 'angular2/core'
import {NavComponent} from './nav/nav';
import {ContactList} from './contacts/components/contact-list';
import {ContactAdd} from './contacts/components/contact-add';
import {ContactEdit} from './contacts/components/contact-edit';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({ 
    selector: 'app', 
    templateUrl: 'app/layout.html',
    directives: [NavComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/', redirectTo: ['Contacts']},
    {path:'/contacts', component: ContactList, name: 'Contacts', useAsDefault: true},
    {path:'/contacts/:id', component: ContactEdit, name: 'EditContact'},
    {path:'/contact/add', component: ContactAdd, name: 'AddContact'}
])
export class AppComponent{
  
}