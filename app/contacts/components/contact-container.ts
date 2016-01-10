import {Component} from 'angular2/core';
import {RouterOutlet, RouteConfig} from 'angular2/router';
import {ContactList} from './contact-list';
import {ContactAdd} from './contact-add';
import {ContactEdit} from './contact-edit';
import {ContactsService} from '../services/contacts-service';

@Component({ 
    selector: 'contact-container', 
    template: `<router-outlet></router-outlet>`,
    directives: [RouterOutlet],
    providers: [ContactsService]
})
@RouteConfig([
    {path: '/', component: ContactList, name: "ContactList", useAsDefault:true},
    {path:'/edit/:id', component: ContactEdit, name: 'EditContact'},
    {path:'/add', component: ContactAdd, name: 'AddContact'}
])
export class ContactComponent{
    
}