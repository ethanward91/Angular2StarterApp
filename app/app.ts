import {Component} from 'angular2/core'
import {NavComponent} from './nav/nav';

import {ContactComponent} from './contacts/components/contact-container';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({ 
    selector: 'app', 
    templateUrl: 'app/layout.html',
    directives: [NavComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/', redirectTo: ['Contacts']},
    {path:'/contacts/...', component: ContactComponent, name: 'Contacts', useAsDefault: true}
])
export class AppComponent{
  
}